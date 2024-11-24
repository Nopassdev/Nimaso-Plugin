import { useLoaderData, useNavigate, useSearchParams } from '@remix-run/react'
import { LoaderFunctionArgs } from '@remix-run/server-runtime'
import { z } from 'zod'

import { getManyForms } from '@/models/form'
import { FormList } from '@/components/FormList'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const parsed = z
    .number({ coerce: true })
    .safeParse(url.searchParams.get('page'))
  const page = Math.max(parsed.success ? parsed.data : 1, 1)

  return getManyForms(page)
}

export default function () {
  const { data, limit, page, total } = useLoaderData<typeof loader>()
  const [_, setSearch] = useSearchParams({ page: '1' })
  const navigate = useNavigate()

  return (
    <FormList
      data={data}
      page={page}
      totalPage={Math.ceil(total / limit)}
      onChangePage={(newPage) => setSearch({ page: newPage.toString() })}
      onCreate={() => navigate('/forms/create')}
      onInspect={(id) => navigate(`/forms/detail/${id}`)}
    />
  )
}
