import { useAuth } from '@/common/Hooks/queries/useAuth';
import LinkButton from '@/components/atomics/LinkButton';
import { Routes } from '@/constants/routes';
import Link from 'next/link';

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <header className="flex items-center shadow-sm h-14">
      <div className="flex items-center justify-between w-full px-4">
        <Link className="text-2xl font-extrabold" href={Routes.HOME}>
          Wanted FE
        </Link>
        {!isLoggedIn ? (
          <div className="flex items-center">
            <LinkButton className="mr-2" to={Routes.LOGIN}>
              로그인
            </LinkButton>
            <LinkButton to={Routes.JOIN}>회원가입</LinkButton>
          </div>
        ) : (
          <LinkButton className="mr-2" to={Routes.LOGIN} onClick={logout}>
            로그아웃
          </LinkButton>
        )}
      </div>
    </header>
  );
}
