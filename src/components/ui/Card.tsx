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
        'bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-primary/10 ring-1 ring-primary/10 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/15',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

