import { fakerZH_CN } from '@faker-js/faker'
import type { Category } from '@prisma/client'

import { PaginatedData } from '@/lib/types'

export type CategoryModel = Category

const fakeData = new Array(100).fill(0).map<CategoryModel>((_, idx) => {
  return {
    id: fakerZH_CN.database.mongodbObjectId(),
    name: fakerZH_CN.commerce.product(),
    serialNumber: idx,
  }
})

export const getManyClassifications = async (
  page = 1,
  limit = 15
): Promise<PaginatedData<CategoryModel>> => {
  const indexedZeroPage = Math.max(page - 1, 0)

  const data = fakeData.slice(
    limit * indexedZeroPage,
    limit + limit * indexedZeroPage
  )
  const total = fakeData.length

  return {
    data,
    total,
    page,
    limit,
  }

  // const total = await prisma.classification.count()

  // const forms = await prisma.classification.findMany({
  //   take: limit,
  //   orderBy: {
  //     id: 'asc',
  //   },
  //   skip: indexedZeroPage * limit,
  // })

  // return {
  //   data: forms,
  //   limit,
  //   page,
  //   total
  // }
}
