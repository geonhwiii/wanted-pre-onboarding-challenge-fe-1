import { ChangeEvent, forwardRef } from 'react';
import cx from 'classnames';

type Props = Readonly<{
  className?: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
}>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', placeholder = '값을 입력해주세요', defaultValue, className, onChange }, ref) => {
    const change = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange(value);
    };
    return (
      <input
        type={type}
        ref={ref}
        className={cx('border-b-2 border-gray-200 py-2 focus:border-blue-600 transition-colors', className)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={change}
      />
    );
  },
);

Input.displayName = 'input';

export default Input;
