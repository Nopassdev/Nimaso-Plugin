import { fakerZH_TW } from '@faker-js/faker'
import type { Form } from '@prisma/client'

import { PaginatedData } from '@/lib/types'
import { prisma } from '@/services/db/db.server'

export type FormModel = Form

const fakeData = new Array(100).fill(0).map<FormModel>((_, idx) => {
  return {
    id: fakerZH_TW.database.mongodbObjectId(),
    category: fakerZH_TW.commerce.productAdjective(),
    name: fakerZH_TW.commerce.product(),
    shortCode: fakerZH_TW.database.mongodbObjectId(),
    state: Math.random() > 0.5 ? 0 : 1,
    serialNumber: idx,
  }
})

export const getManyForms = async (
  page = 0,
  limit = 15
): Promise<PaginatedData<FormModel>> => {
  const data = fakeData.slice(limit * page, limit + limit * page)
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
  //   skip: page * limit,
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
