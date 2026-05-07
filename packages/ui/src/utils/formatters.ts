import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility to merge class names with Tailwind
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Format price with currency
 * @param amount Number to format
 * @param currency Currency code (default: USD)
 * @param locale Locale for formatting (default: en-US)
 * @returns Formatted price string
 */
export function formatPrice(
  amount: number,
  currency = 'USD',
  locale = 'en-US',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format date to locale string
 * @param date Date to format
 * @param locale Locale for formatting (default: en-US)
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number,
  locale = 'en-US',
): string {
  const d = typeof date === 'string' || typeof date === 'number'
    ? new Date(date)
    : date

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d)
}

/**
 * Format date with time
 * @param date Date to format
 * @param locale Locale for formatting (default: en-US)
 * @returns Formatted datetime string
 */
export function formatDateTime(
  date: Date | string | number,
  locale = 'en-US',
): string {
  const d = typeof date === 'string' || typeof date === 'number'
    ? new Date(date)
    : date

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}
