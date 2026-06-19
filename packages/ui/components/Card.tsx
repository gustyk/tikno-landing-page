import * as React from 'react';
import { cn } from '../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  hoverable?: boolean;
}

const variantStyles: Record<NonNullable<CardProps['variant']>, string> = {
  default: 'bg-white shadow-sm',
  elevated: 'bg-white shadow-lg',
  bordered: 'bg-white border border-gray-200',
};

export const Card: React.FC<CardProps> = ({
  className,
  variant = 'default',
  hoverable = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-xl p-6',
        variantStyles[variant],
        hoverable && 'transition-all duration-200 hover:shadow-xl hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
