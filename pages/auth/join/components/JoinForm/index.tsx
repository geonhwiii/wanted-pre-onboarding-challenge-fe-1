import { useJoinMutation } from '@/common/Hooks/mutations/useJoinMutation';
import Button from '@/components/atomics/Button';
import Input from '@/components/atomics/Input';
import { FormEvent, useMemo, useState } from 'react';

type Props = {};

export default function JoinForm({}: Props) {
  const { mutate } = useJoinMutation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  const onSubmitJoin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ email, password });
  };

  const disableButton = useMemo(() => {
    switch (true) {
      case !email.length:
        return true;
      case !password.length:
        return true;
      case !passwordCheck.length:
        return true;
      case password !== passwordCheck:
        return true;
      default:
        return false;
    }
  }, [email, password, passwordCheck]);

  return (
    <form className="flex flex-col" onSubmit={onSubmitJoin}>
      <Input type="email" placeholder="이메일" className="mb-6" onChange={setEmail} />
      <Input type="password" placeholder="비밀번호" className="mb-6" onChange={setPassword} />
      <Input type="password" placeholder="비밀번호 확인" className="mb-12" onChange={setPasswordCheck} />
      <Button type="submit" isDisable={disableButton}>
        회원가입
      </Button>
    </form>
  );
}
