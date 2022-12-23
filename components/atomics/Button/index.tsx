import { PropsWithChildren } from 'react';
import cx from 'classnames';

type Props = PropsWithChildren & {
  readonly type?: 'button' | 'submit';
  readonly className?: string;
  readonly isDisable?: boolean;
  readonly onClick?: () => void;
};

export default function Button({ type = 'button', isDisable, children, className, onClick }: Props) {
  return (
    <button
      type={type}
      disabled={isDisable}
      className={cx(
        'bg-blue-600 text-white text-lg font-bold rounded-xl pw-2 py-4 disabled:bg-slate-200 disabled:text-gray-50 disabled:cursor-not-allowed transition-colors',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
