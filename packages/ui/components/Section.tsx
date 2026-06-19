import * as React from 'react';
import { cn } from '../utils/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'white' | 'gray' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const backgroundStyles: Record<NonNullable<SectionProps['background']>, string> = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-br from-primary-50 via-white to-accent-50',
};

const paddingStyles: Record<NonNullable<SectionProps['padding']>, string> = {
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16',
  lg: 'py-16 sm:py-20',
  xl: 'py-20 sm:py-28',
};

export const Section: React.FC<SectionProps> = ({
  className,
  background = 'white',
  padding = 'lg',
  children,
  ...props
}) => {
  return (
    <section
      className={cn(backgroundStyles[background], paddingStyles[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
};
