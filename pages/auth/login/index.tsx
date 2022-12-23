import Button from '@/components/atomics/Button';
import Input from '@/components/atomics/Input';
import Typography from '@/components/atomics/Typography';
import { useMemo, useRef, useState } from 'react';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const disableButton = useMemo(() => {
    switch (true) {
      case !email.length:
        return true;
      case !password.length:
        return true;
      default:
        return false;
    }
  }, [email, password]);

  return (
    <div className="w-96 mx-auto mt-24">
      <div className="text-center mb-6">
        <Typography className="text-3xl font-extrabold">로그인</Typography>
      </div>
      <form className="flex flex-col">
        <Input ref={emailRef} type="email" placeholder="이메일" className="mb-6" onChange={setEmail} />
        <Input type="password" ref={passwordRef} placeholder="비밀번호" className="mb-12" onChange={setPassword} />
        <Button type="submit" isDisable={disableButton}>
          로그인
        </Button>
      </form>
    </div>
  );
}
