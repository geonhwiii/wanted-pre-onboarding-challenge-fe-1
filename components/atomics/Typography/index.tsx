import { PropsWithChildren } from 'react';
import cx from 'classnames';

type Props = PropsWithChildren & {
  readonly className?: string;
};

export default function Typography({ children, className }: Props) {
  return <span className={cx(className)}>{children}</span>;
}
