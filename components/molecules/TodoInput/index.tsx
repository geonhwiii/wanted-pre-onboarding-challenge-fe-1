import Input from '@/components/atomics/Input';
import { FormEvent } from 'react';

export const TodoInput = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <Input className="w-full px-4 text-2xl bg-gray-100 " placeholder="할 일을 입력해주세요..!" />
    </form>
  );
};
