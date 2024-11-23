import { ButtonHTMLAttributes, FC } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      solid: 'bg-amber text-white',
      outline: 'bg-white text-amber border border-amber',
    },
    size: {
      md: 'h-9 rounded-md px-6 text-base',
      sm: 'h-8 rounded-sm px-5 text-sm',
      lg: 'h-10 rounded-lg px-8 text-lg',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

type ButtonVariant = 'solid' | 'outline'
type ButtonSize = 'md' | 'sm' | 'lg'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button: FC<Props> = ({
  children,
  className,
  variant = 'solid',
  size = 'md',
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ size, variant, className }), {
        'cursor-default opacity-40': props.disabled,
      })}
    >
      {children}
    </button>
  )
}
