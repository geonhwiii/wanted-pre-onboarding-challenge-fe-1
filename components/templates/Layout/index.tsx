import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <div className="">
      <div className="max-w-5xl m-auto">{children}</div>
    </div>
  );
}
