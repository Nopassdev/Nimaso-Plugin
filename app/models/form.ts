import { fakerZH_CN } from '@faker-js/faker'
import type { Form } from '@prisma/client'

import { PaginatedData } from '@/lib/types'
import { prisma } from '@/services/db/db.server'

export type FormModel = Form

const fakeData = new Array(100).fill(0).map<FormModel>((_, idx) => {
  return {
    id: fakerZH_CN.database.mongodbObjectId(),
    category: fakerZH_CN.commerce.productAdjective(),
    name: fakerZH_CN.commerce.product(),
    shortCode: fakerZH_CN.database.mongodbObjectId(),
    state: Math.random() > 0.5 ? 0 : 1,
    serialNumber: idx,
  }
})

export const getManyForms = async (
  page = 1,
  limit = 15
): Promise<PaginatedData<FormModel>> => {
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

  // const total = await prisma.form.count()

  // const forms = await prisma.form.findMany({
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

export const getFormById = async (id: Form['id']) => {
  return await prisma.form.findUnique({
    where: { id },
  })
}

export const updateFormById = async (id: Form['id'], data: Partial<Form>) => {
  return await prisma.user.update({
    where: { id },
    data,
  })
}
