export type PaginatedData<T> = {
  data: T[]
  total: number
  page: number
  limit: number
}
