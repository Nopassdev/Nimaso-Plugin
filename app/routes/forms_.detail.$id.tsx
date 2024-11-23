import { useParams } from '@remix-run/react'

type Params = {
  id: string
}

export default function FormDetail() {
  const { id } = useParams<Params>()

  return 'FORM DETAIL ' + id
}
