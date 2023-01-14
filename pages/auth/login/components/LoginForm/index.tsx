import { useLoginMutation } from '@/common/Hooks/mutations/auth/useLoginMutation';
import Button from '@/components/atomics/Button';
import Input from '@/components/atomics/Input';
import { FormEvent, useMemo, useState } from 'react';

export default function LoginForm() {
  const { mutate } = useLoginMutation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmitLoginInfo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ email, password });
  };

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
    <form className="flex flex-col" onSubmit={onSubmitLoginInfo}>
      <Input type="email" placeholder="이메일" className="mb-6" onChange={setEmail} />
      <Input type="password" placeholder="비밀번호" className="mb-12" onChange={setPassword} />
      <Button type="submit" isDisable={disableButton}>
        로그인
      </Button>
    </form>
  );
}
