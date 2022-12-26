import Navbar from '@/components/molecules/Navbar';
import { NextComponentType, NextPageContext } from 'next';

type Props = {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
};

export default function Layout({ Component, pageProps }: Props) {
  return (
    <div className="max-w-5xl h-full m-auto shadow-xl">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
