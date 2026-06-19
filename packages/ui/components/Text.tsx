import * as React from 'react';
import { cn } from '../utils/cn';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'default' | 'muted' | 'subtle';
  align?: 'left' | 'center' | 'right';
}

const sizeStyles: Record<NonNullable<TextProps['size']>, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const colorStyles: Record<NonNullable<TextProps['color']>, string> = {
  default: 'text-gray-700',
  muted: 'text-gray-600',
  subtle: 'text-gray-500',
};

const alignStyles: Record<NonNullable<TextProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Text: React.FC<TextProps> = ({
  className,
  size = 'md',
  color = 'default',
  align = 'left',
  children,
  ...props
}) => {
  return (
    <p
      className={cn(sizeStyles[size], colorStyles[color], alignStyles[align], className)}
      {...props}
    >
      {children}
    </p>
  );
};
