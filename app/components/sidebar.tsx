import { FC, ReactNode } from 'react'
import { Link, useLocation, useNavigation } from '@remix-run/react'

import { ApproveIcon } from '@/lib/assets/icons/approve'
import { CategoryIcon } from '@/lib/assets/icons/category'
import { ListIcon } from '@/lib/assets/icons/list'
import { cn } from '@/lib/utils'

export const AppSidebar = () => {
  const { pathname } = useLocation()

  return (
    <div className="h-full w-20 flex-shrink-0 flex-grow-0 bg-dark py-5">
      <div className="mb-20 px-1">
        <img src="/logo.png" />
      </div>

      {items.map(({ href, icon, label }) => (
        <Item
          key={href}
          href={href}
          icon={icon}
          label={label}
          isActive={pathname === href}
        />
      ))}
    </div>
  )
}

const items = [
  {
    label: '表单',
    icon: <ListIcon />,
    href: '/list',
  },
  {
    label: '分类',
    icon: <CategoryIcon />,
    href: '/categories',
  },
  {
    label: '审批',
    icon: <ApproveIcon />,
    href: '/approve',
  },
]

type ItemProps = {
  icon: ReactNode
  label: string
  isActive?: boolean
  href: string
}

const Item: FC<ItemProps> = ({ icon, label, isActive, href }) => {
  return (
    <Link
      to={href}
      className={cn(
        'mt-5 flex w-full flex-col items-center justify-center py-4',
        isActive ? 'bg-amber' : ''
      )}
    >
      <span className="aspect-square w-[30px] text-white">{icon}</span>

      <span
        className={cn(
          'mt-1.5 text-base',
          isActive ? 'text-black' : 'text-white'
        )}
      >
        {label}
      </span>
    </Link>
  )
}
