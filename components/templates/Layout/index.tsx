import Navbar from '@/components/molecules/Navbar';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <div className="max-w-5xl h-full m-auto shadow-xl">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
