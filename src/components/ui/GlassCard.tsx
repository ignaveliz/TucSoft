import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  edgeGlow?: boolean;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  edgeGlow = false,
  hoverEffect = true,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-ink-deep rounded-lg p-6 sm:p-8 relative overflow-hidden',
          hoverEffect && 'transition-colors duration-200 hover:bg-ink-card',
          edgeGlow && 'border-l-2 border-brand',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
