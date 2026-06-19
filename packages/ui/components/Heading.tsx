import * as React from 'react';
import { cn } from '../utils/cn';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  align?: 'left' | 'center' | 'right';
}

const sizeStyles: Record<NonNullable<HeadingProps['size']>, string> = {
  sm: 'text-2xl sm:text-3xl',
  md: 'text-3xl sm:text-4xl',
  lg: 'text-4xl sm:text-5xl',
  xl: 'text-5xl sm:text-6xl',
  '2xl': 'text-6xl sm:text-7xl',
};

const alignStyles: Record<NonNullable<HeadingProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Heading: React.FC<HeadingProps> = ({
  className,
  as: Component = 'h2',
  size = 'lg',
  align = 'left',
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'font-display font-bold tracking-tight text-gray-900',
        sizeStyles[size],
        alignStyles[align],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
