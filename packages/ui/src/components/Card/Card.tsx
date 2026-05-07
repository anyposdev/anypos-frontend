import type { CardProps as HeroCardProps } from '@heroui/react'
import {
  Card as HeroCard,
  CardContent as HeroCardContent,
  CardFooter as HeroCardFooter,
  CardHeader as HeroCardHeader,
} from '@heroui/react'

export interface CardProps extends HeroCardProps {
  /** Card contents */
  children: React.ReactNode
}

export function Card(props: CardProps) {
  return <HeroCard {...props} />
}

export interface CardBodyProps {
  /** Card body content */
  children: React.ReactNode
  className?: string
}

// HeroUI v3 uses CardContent instead of CardBody
export function CardBody({ children, className }: CardBodyProps) {
  return <HeroCardContent className={className ?? ''}>{children}</HeroCardContent>
}

export interface CardHeaderProps {
  /** Card header content */
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <HeroCardHeader className={className ?? ''}>{children}</HeroCardHeader>
}

export interface CardFooterProps {
  /** Card footer content */
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <HeroCardFooter className={className ?? ''}>{children}</HeroCardFooter>
}

// Re-export HeroUI components with their original names
export { HeroCardContent as CardContent, HeroCard as CardRoot, HeroCardFooter, HeroCardHeader }
