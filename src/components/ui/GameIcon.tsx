import React from 'react'

interface GameIconProps {
  type: 'dice' | 'board' | 'piece' | 'card'
  className?: string
}

export default function GameIcon({ type, className = '' }: GameIconProps) {
  const icons = {
    dice: (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="currentColor"
      >
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="10"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="30" cy="30" r="6" fill="white" />
        <circle cx="70" cy="30" r="6" fill="white" />
        <circle cx="50" cy="50" r="6" fill="white" />
        <circle cx="30" cy="70" r="6" fill="white" />
        <circle cx="70" cy="70" r="6" fill="white" />
      </svg>
    ),
    board: (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="10" y="10" width="80" height="80" rx="5" />
        <line x1="35" y1="10" x2="35" y2="90" />
        <line x1="65" y1="10" x2="65" y2="90" />
        <line x1="10" y1="35" x2="90" y2="35" />
        <line x1="10" y1="65" x2="90" y2="65" />
        <circle cx="35" cy="35" r="4" fill="currentColor" />
        <circle cx="65" cy="35" r="4" fill="currentColor" />
        <circle cx="35" cy="65" r="4" fill="currentColor" />
        <circle cx="65" cy="65" r="4" fill="currentColor" />
      </svg>
    ),
    piece: (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="currentColor"
      >
        <circle cx="50" cy="30" r="20" />
        <ellipse cx="50" cy="70" rx="25" ry="15" />
        <rect x="45" y="25" width="10" height="45" />
      </svg>
    ),
    card: (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="15" y="20" width="70" height="60" rx="5" />
        <line x1="25" y1="35" x2="75" y2="35" />
        <line x1="25" y1="45" x2="65" y2="45" />
        <line x1="25" y1="55" x2="70" y2="55" />
        <circle cx="50" cy="65" r="5" />
      </svg>
    ),
  }

  return icons[type]
}

