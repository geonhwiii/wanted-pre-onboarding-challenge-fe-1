import Navbar from '@/components/molecules/Navbar';
import { NextComponentType, NextPageContext } from 'next';
import { ToastContainer } from 'react-toastify';

type Props = {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
};

export default function Layout({ Component, pageProps }: Props) {
  return (
    <div className="h-full max-w-5xl m-auto shadow-xl">
      <Navbar />
      <main>
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} position="top-center" hideProgressBar limit={1} theme="dark" />
      </main>
    </div>
  );
}
