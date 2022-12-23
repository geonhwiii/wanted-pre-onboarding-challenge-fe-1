import LinkButton from '@/components/atomics/LinkButton';
import { Routes } from '@/constants/routes';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="shadow-sm h-14 flex items-center">
      <div className="w-full flex justify-between items-center px-4">
        <Link className="text-2xl font-extrabold" href={Routes.HOME}>
          Wanted FE
        </Link>
        <div className="flex items-center">
          <LinkButton className="mr-2" to={Routes.LOGIN}>
            로그인
          </LinkButton>
          <LinkButton to={Routes.JOIN}>회원가입</LinkButton>
        </div>
      </div>
    </header>
  );
}
