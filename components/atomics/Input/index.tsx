import { forwardRef } from 'react';
import cx from 'classnames';

type Props = Readonly<{
  className?: string;
  type?: 'text' | 'password';
  defaultValue?: string;
}>;

const Input = forwardRef<HTMLInputElement, Props>(({ type, defaultValue, className }, ref) => {
  return <input type={type} ref={ref} className={cx(className)} defaultValue={defaultValue} />;
});

Input.displayName = 'input';

export default Input;
