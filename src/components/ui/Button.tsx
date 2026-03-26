import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary hover:shadow-xl hover:shadow-primary/35 active:scale-95',
    secondary: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent hover:shadow-xl hover:shadow-accent/35 active:scale-95',
    outline: 'border-2 border-primary/70 text-primary hover:bg-primary hover:text-white focus:ring-primary hover:shadow-xl hover:shadow-primary/25 active:scale-95',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-primary-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      )}
    </button>
  )
}

