import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

