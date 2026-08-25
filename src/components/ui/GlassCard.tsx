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
          'glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden',
          hoverEffect && 'glass-card-hover',
          edgeGlow && 'edge-glow',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
