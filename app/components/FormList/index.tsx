import { FC } from 'react'

import { MinusOutlineIcon } from '@/lib/assets/icons/minus'
import { cn } from '@/lib/utils'
import { FormModel } from '@/models/form'
import { Button } from '@/components/ui/button'
import {
  BodyCell,
  BodyRow,
  HeaderCell,
  HeaderRow,
  Pagination,
} from '@/components/ui/table'

type Props = {
  data: FormModel[]
  page: number
  totalPage?: number
  onChangePage?: (pageNumber: number) => void
  onClose?: (formId: FormModel['id']) => void
  onCopy?: (formId: FormModel['id']) => void
  onRename?: (formId: FormModel['id']) => void
  onCreate?: () => void
  onInspect?: (formId: FormModel['id']) => void
}

export const FormList: FC<Props> = ({
  data,
  onClose,
  onCopy,
  onCreate,
  onRename,
  page,
  totalPage = 1,
  onChangePage,
  onInspect,
}) => {
  return (
    <div className='flex min-h-full flex-col p-5'>
      <div className='flex h-full flex-grow flex-col rounded-3xl bg-white px-8 py-5'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-bold'>表单</h2>

          <Button onClick={onCreate}>创建表单</Button>
        </div>

        {/* TABLE */}
        <div className='mt-8 flex flex-grow flex-col justify-between'>
          <div>
            <HeaderRow>
              <HeaderCell className='w-[10%]'>序号</HeaderCell>
              <HeaderCell className='w-[25%] justify-start'>名称</HeaderCell>
              <HeaderCell className='w-[15%] justify-start'>分类</HeaderCell>
              <HeaderCell className='w-[15%]'>状态</HeaderCell>
              <HeaderCell className='w-[15%] justify-start'>简码</HeaderCell>
              <HeaderCell className='w-[20%]'>操作</HeaderCell>
            </HeaderRow>
            <div>
              {data.map((form) => (
                <Item
                  key={form.id}
                  form={form}
                  onClick={() => onInspect?.(form.id)}
                />
              ))}
              {data.length < 15 &&
                new Array(15 - data.length).fill(0).map((_, idx) => {
                  return <BodyRowPlaceholder key={`placeholder-${idx}`} />
                })}
            </div>
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
    </div>
  )
}

type ItemProps = {
  form: FormModel
  onClick?: () => void
}

const Item: FC<ItemProps> = ({ form, onClick }) => {
  return (
    <BodyRow onClick={onClick}>
      <BodyCell className='w-[10%]'>{form.serialNumber}</BodyCell>
      <BodyCell className='w-[25%] justify-start'>{form.name}</BodyCell>
      <BodyCell className='w-[15%] justify-start'>{form.category}</BodyCell>
      <BodyCell className={cn('w-[15%]', { 'text-red': form.state === 0 })}>
        {form.state === 0 ? (
          <>
            <MinusOutlineIcon className='ml-4 mr-1 h-4 w-4 text-red' />
            停用
          </>
        ) : (
          '活跃'
        )}
      </BodyCell>
      <BodyCell className='w-[15%] justify-start py-2'>
        <span className='inline-flex h-full items-center rounded-sm border border-[#DDDDDD] px-6 py-3 '>
          {form.shortCode}
        </span>
      </BodyCell>
      <BodyCell className='w-[20%]'>
        <div className='flex gap-4 align-baseline'>
          <span className='cursor-pointer  text-amber'>激活</span>
          <span className='cursor-pointer  text-amber'>重命名</span>
          <span className='cursor-pointer  text-amber'>复制</span>
          <span className='cursor-pointer  text-red100'>删除</span>
        </div>
      </BodyCell>
    </BodyRow>
  )
}

const BodyRowPlaceholder = () => {
  return (
    <BodyRow className='cursor-default'>
      <BodyCell className='w-[10%]'></BodyCell>
      <BodyCell className='w-[25%] justify-start'></BodyCell>
      <BodyCell className='w-[15%]'></BodyCell>
      <BodyCell className={cn('w-[15%]')}></BodyCell>
      <BodyCell className='w-[15%] py-2'></BodyCell>
      <BodyCell className='w-[20%]'>
        <div className='flex gap-4 align-baseline'>
          <span className='cursor-pointer  text-amber'></span>
          <span className='cursor-pointer  text-amber'></span>
          <span className='cursor-pointer  text-amber'></span>
          <span className='cursor-pointer  text-red100'></span>
        </div>
      </BodyCell>
    </BodyRow>
  )
}
