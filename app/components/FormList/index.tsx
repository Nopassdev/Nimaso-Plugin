import { FC, PropsWithChildren } from 'react'

import { MinusOutlineIcon } from '@/lib/assets/icons/minus'
import { cn } from '@/lib/utils'
import { FormModel } from '@/models/form'
import { Button } from '@/components/ui/button'

type Props = {
  data: FormModel[]
  page?: number
  totalPage?: number
  onChangePage?: (pageNumber: number) => void
  onClose?: (formId: FormModel['id']) => void
  onCopy?: (formId: FormModel['id']) => void
  onRename?: (formId: FormModel['id']) => void
  onCreateForm?: () => void
}

export const FormList: FC<Props> = ({
  data,
  onClose,
  onCopy,
  onCreateForm,
  onRename,
  page = 0,
  totalPage = 0,
  onChangePage,
}) => {
  return (
    <div className="h-full p-5">
      <div className="h-full rounded-3xl bg-white px-8 py-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">表单</h2>

          <Button>创建表单</Button>
        </div>

        {/* TABLE */}
        <div className="mt-8">
          <div>
            <HeaderCell className="w-[10%]">序号</HeaderCell>
            <HeaderCell className="w-[25%] justify-start">名称</HeaderCell>
            <HeaderCell className="w-[15%] justify-start">分类</HeaderCell>
            <HeaderCell className="w-[15%]">状态</HeaderCell>
            <HeaderCell className="w-[15%] justify-start">简码</HeaderCell>
            <HeaderCell className="w-[20%]">操作</HeaderCell>
          </div>
          <div>
            {data.map((form) => (
              <BodyRow key={form.id} form={form} />
            ))}
            {data.length < 15 &&
              new Array(15 - data.length).fill(0).map((_, idx) => {
                return <BodyRowPlaceholder key={`placeholder-${idx}`} />
              })}
          </div>

          <div className="mt-20 flex justify-center">
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

type HeaderCellProps = PropsWithChildren<{
  className?: string
}>

const HeaderCell: FC<HeaderCellProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'inline-flex h-[50px] items-center justify-center bg-smoke text-grey',
        className
      )}
    >
      {children}
    </div>
  )
}

type BodyCellProps = PropsWithChildren<{
  className?: string
}>

const BodyCell: FC<BodyCellProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'inline-flex h-[50px] items-center justify-center text-black',
        className
      )}
    >
      {children}
    </div>
  )
}

type BodyRowProps = {
  form: FormModel
}

const BodyRow: FC<BodyRowProps> = ({ form }) => {
  return (
    <div className="flex odd:bg-transparent even:bg-smoke200">
      <BodyCell className="w-[10%]">{form.serialNumber}</BodyCell>
      <BodyCell className="w-[25%] justify-start">{form.name}</BodyCell>
      <BodyCell className="w-[15%] justify-start">{form.category}</BodyCell>
      <BodyCell className={cn('w-[15%]', { 'text-red': form.state === 0 })}>
        {form.state === 0 ? (
          <>
            <MinusOutlineIcon className="ml-4 mr-1 h-4 w-4 text-red" />
            停用
          </>
        ) : (
          '活跃'
        )}
      </BodyCell>
      <BodyCell className="w-[15%] justify-start py-2">
        <span className="inline-flex h-full items-center rounded-sm border border-[#DDDDDD] px-6 py-3 text-sm">
          {form.shortCode}
        </span>
      </BodyCell>
      <BodyCell className="w-[20%]">
        <div className="flex gap-4 align-baseline">
          <span className="cursor-pointer text-sm text-amber">激活</span>
          <span className="cursor-pointer text-sm text-amber">重命名</span>
          <span className="cursor-pointer text-sm text-amber">复制</span>
          <span className="cursor-pointer text-sm text-red100">删除</span>
        </div>
      </BodyCell>
    </div>
  )
}

const BodyRowPlaceholder = () => {
  return (
    <div className="flex odd:bg-transparent even:bg-smoke200">
      <BodyCell className="w-[10%]"></BodyCell>
      <BodyCell className="w-[25%] justify-start"></BodyCell>
      <BodyCell className="w-[15%]"></BodyCell>
      <BodyCell className={cn('w-[15%]')}></BodyCell>
      <BodyCell className="w-[15%] py-2"></BodyCell>
      <BodyCell className="w-[20%]">
        <div className="flex gap-4 align-baseline">
          <span className="cursor-pointer text-sm text-amber"></span>
          <span className="cursor-pointer text-sm text-amber"></span>
          <span className="cursor-pointer text-sm text-amber"></span>
          <span className="cursor-pointer text-sm text-red100"></span>
        </div>
      </BodyCell>
    </div>
  )
}

type PaginationProps = {
  className?: string
  totalPage: number
  /**
   * starts from 1
   */
  currentPage: number
  onChange: (newPageNumber: number) => void
}

const Pagination: FC<PaginationProps> = ({
  className,
  currentPage,
  onChange,
  totalPage,
}) => {
  // 0-based-indexed
  const getPageNumbers = () => {
    const start = Math.max(currentPage - 4, 1)

    const end = Math.min(start + 4, totalPage)

    return new Array(end - start + 1).fill(0).map((_, idx) => idx + start)
  }

  const pageNumbers = getPageNumbers()
  const hasTrailing = currentPage < totalPage

  const onPrevPage = () => {
    onChange(currentPage - 1)
  }

  const onNextPage = () => {
    onChange(currentPage + 1)
  }

  return (
    <div className="flex items-center gap-9">
      <Button
        disabled={currentPage === 1}
        variant="outline"
        size="sm"
        onClick={onPrevPage}
      >
        上一页
      </Button>
      <div className="flex h-full w-[100px] items-center gap-2">
        {pageNumbers.map((pageN) => (
          <span
            key={pageN}
            className={cn('text-sm', { 'text-amber': pageN === currentPage })}
          >
            {pageN}
          </span>
        ))}
        {hasTrailing && <span className="text-sm">...</span>}
      </div>
      <Button
        disabled={currentPage >= totalPage}
        size="sm"
        onClick={onNextPage}
      >
        下一页
      </Button>
    </div>
  )
}
