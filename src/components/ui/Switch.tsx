import React from 'react';
import { clsx } from 'clsx';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <label className={clsx('inline-flex items-center gap-3 cursor-pointer select-none', disabled && 'opacity-50 cursor-not-allowed')}>
      <div
        onClick={() => !disabled && onChange(!checked)}
        className={clsx(
          'w-12 h-6 rounded-full transition-colors duration-200 relative p-1',
          checked ? 'bg-brand' : 'bg-ink-card'
        )}
      >
        <div
          className={clsx(
            'w-4 h-4 rounded-full bg-white transition-transform duration-200 shadow-md',
            checked ? 'translate-x-6' : 'translate-x-0'
          )}
        />
      </div>
      {label && <span className="text-sm font-medium text-white">{label}</span>}
    </label>
  );
};
