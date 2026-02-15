export function cn(...inputs: (string | undefined)[]) {
  // Utilitário para combinar classes Tailwind
  return inputs.filter(Boolean).join(' ')
}

