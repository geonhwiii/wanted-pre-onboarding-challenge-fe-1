import { ChangeEvent, forwardRef } from 'react';
import cx from 'classnames';

type Props = Readonly<{
  className?: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  defaultValue?: string;
  minLength?: number;
  onChange?: (value: string) => void;
}>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', placeholder = '값을 입력해주세요', defaultValue, className, minLength, onChange = () => {} }, ref) => {
    const change = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange(value);
    };
    return (
      <input
        type={type}
        ref={ref}
        className={cx(
          'border-b bg-transparent caret-slate-400 border-gray-900 pb-2 focus:border-blue-600 text-white transition-colors',
          className,
        )}
        placeholder={placeholder}
        defaultValue={defaultValue}
        minLength={minLength}
        onChange={change}
      />
    );
  },
);

Input.displayName = 'input';

export default Input;
