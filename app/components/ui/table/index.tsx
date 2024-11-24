import { FC, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const BodyRow: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        'flex cursor-pointer odd:bg-transparent even:bg-smoke200 hover:bg-smoke',
        className
      )}
    >
      {children}
    </div>
  )
}

export const HeaderRow: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn('flex bg-smoke', className)}>
      {children}
    </div>
  )
}

export const HeaderCell: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        'inline-flex h-[50px] items-center justify-center text-grey',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BodyCell: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        'inline-flex h-[50px] items-center justify-center text-black',
        className
      )}
    >
      {children}
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
  limitNoOfPage?: number
}

export const Pagination: FC<PaginationProps> = ({
  className,
  currentPage,
  onChange,
  totalPage,
  limitNoOfPage = 5,
}) => {
  // 0-based-indexed
  const getPageNumbers = () => {
    const threshold = limitNoOfPage - 1
    const start = Math.max(currentPage - threshold, 1)

    const end = Math.min(start + threshold, totalPage)

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
    <div className='flex items-center gap-9'>
      <Button
        disabled={currentPage === 1}
        variant='outline'
        size='sm'
        onClick={onPrevPage}
      >
        上一页
      </Button>
      <div className='flex h-full w-[100px] items-center gap-2'>
        {pageNumbers.map((pageN) => (
          <span
            key={pageN}
            className={cn('text-sm', { 'text-amber': pageN === currentPage })}
          >
            {pageN}
          </span>
        ))}
        {hasTrailing && <span className='text-sm'>...</span>}
      </div>
      <Button
        disabled={currentPage >= totalPage}
        size='sm'
        onClick={onNextPage}
      >
        下一页
      </Button>
    </div>
  )
}
