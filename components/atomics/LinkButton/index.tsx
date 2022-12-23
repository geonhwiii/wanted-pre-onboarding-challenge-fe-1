import NextLink from 'next/link';
import cx from 'classnames';
import { PropsWithChildren } from 'react';
import { UrlObject } from 'url';

type Props = PropsWithChildren & {
  readonly to: string | UrlObject;
  readonly className?: string;
};

export default function LinkButton({ children, to, className }: Props) {
  return (
    <div className={cx('flex bg-blue-600 justify-center items-center w-20 h-10 rounded-2xl', className)}>
      <NextLink className={'text-white font-bold'} href={to}>
        {children}
      </NextLink>
    </div>
  );
}
