import { FC } from 'react'

import { CategoryModel } from '@/models/category'
import { Button } from '@/components/ui/button'

import {
  BodyCell,
  BodyRow,
  HeaderCell,
  HeaderRow,
  Pagination,
} from '../ui/table'

type Props = {
  data: CategoryModel[]
  page: number
  totalPage?: number
  onChangePage?: (pageNumber: number) => void
  onEdit?: (formId: CategoryModel['id']) => void
  onDelete?: (formId: CategoryModel['id']) => void
  onCreate?: () => void
}

export const CategoryList: FC<Props> = ({
  data,
  page,
  totalPage = 1,
  onChangePage,
}) => {
  return (
    <div className='flex min-h-full flex-col p-5'>
      <Header />

      <div className='mt-4 flex flex-grow flex-col justify-between rounded-3xl bg-white px-8 py-6'>
        <div>
          <HeaderRow>
            <HeaderCell className='w-[10%]'>序号</HeaderCell>
            <HeaderCell className='w-[65%] justify-start'>名称</HeaderCell>
            <HeaderCell className='w-[25%]'>操作</HeaderCell>
          </HeaderRow>

          {data.map((category) => (
            <Item key={category.id} category={category} />
          ))}
          {data.length < 15 &&
            new Array(15 - data.length)
              .fill(0)
              .map((_, idx) => (
                <BodyRowPlaceholder key={`placeholder-${idx}`} />
              ))}
        </div>

        <div className='mt-20 flex justify-center'>
          <Pagination
            currentPage={page}
            totalPage={totalPage}
            onChange={(newP) => onChangePage?.(newP)}
          />
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className='flex flex-grow-0 items-center justify-between rounded-[10px] bg-white px-8 py-6'>
      <h2 className='text-lg font-bold'>分类</h2>

      <Button>创建分类</Button>
    </div>
  )
}

type ItemProps = {
  category: CategoryModel
  onClick?: () => void
}

const Item: FC<ItemProps> = ({ category: form, onClick }) => {
  return (
    <BodyRow onClick={onClick} className='cursor-default'>
      <BodyCell className='w-[10%]'>{form.serialNumber}</BodyCell>
      <BodyCell className='w-[65%] justify-start'>{form.name}</BodyCell>
      <BodyCell className='w-[25%]'>
        <div className='flex gap-12 align-baseline'>
          <span className='cursor-pointer text-amber'>重命名</span>
          <span className='cursor-pointer text-red100'>删除</span>
        </div>
      </BodyCell>
    </BodyRow>
  )
}

const BodyRowPlaceholder = () => {
  return (
    <BodyRow className='cursor-default'>
      <BodyCell className='w-[10%]'></BodyCell>
      <BodyCell className='w-[65%] justify-start'></BodyCell>
      <BodyCell className='w-[35%]'></BodyCell>
    </BodyRow>
  )
}
