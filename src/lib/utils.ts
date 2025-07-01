import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

// Add type declaration for module
export type { ClassValue } from 'clsx'

// Add default export for compatibility
export default cn
