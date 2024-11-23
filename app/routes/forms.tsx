import { useLoaderData, useSearchParams } from '@remix-run/react'
import { LoaderFunctionArgs } from '@remix-run/server-runtime'
import { z } from 'zod'

import { FormModel, getManyForms } from '@/models/form'
import { FormList } from '@/components/FormList'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const parsed = z
    .number({ coerce: true })
    .safeParse(url.searchParams.get('page'))
  const page = parsed.success ? parsed.data : 0

  return getManyForms(page)
}

export default function () {
  const { data, limit, page, total } = useLoaderData<typeof loader>()
  const [search, setSearch] = useSearchParams({ page: '0' })

  return (
    <FormList
      data={data}
      page={page}
      totalPage={Math.ceil(total / limit)}
      onChangePage={(newPage) => setSearch({ page: newPage.toString() })}
    />
  )
}
