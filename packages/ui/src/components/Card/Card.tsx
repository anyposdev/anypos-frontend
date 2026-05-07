import {
  Card as HeroCard,
  CardHeader as HeroCardHeader,
  CardContent as HeroCardContent,
  CardFooter as HeroCardFooter,
} from '@heroui/react'
import type { CardProps as HeroCardProps } from '@heroui/react'

export interface CardProps extends HeroCardProps {
  /** Card content */
  children: React.ReactNode
}

export const Card = (props: CardProps) => {
  return <HeroCard {...props} />
}

export interface CardBodyProps {
  /** Card body content */
  children: React.ReactNode
  className?: string
}

// HeroUI v3 uses CardContent instead of CardBody
export const CardBody = ({ children, className }: CardBodyProps) => {
  return <HeroCardContent className={className || ''}>{children}</HeroCardContent>
}

export interface CardHeaderProps {
  /** Card header content */
  children: React.ReactNode
  className?: string
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <HeroCardHeader className={className || ''}>{children}</HeroCardHeader>
}

export interface CardFooterProps {
  /** Card footer content */
  children: React.ReactNode
  className?: string
}

export const CardFooter = ({ children, className }: CardFooterProps) => {
  return <HeroCardFooter className={className || ''}>{children}</HeroCardFooter>
}

// Re-export HeroUI components with their original names
export { HeroCard as CardRoot, HeroCardContent as CardContent, HeroCardHeader, HeroCardFooter }
