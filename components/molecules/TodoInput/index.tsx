import { useCreateTodoMutation } from '@/common/Hooks/mutations/useCreateTodoMutation';
import Button from '@/components/atomics/Button';
import Input from '@/components/atomics/Input';
import { FormEvent, useRef } from 'react';
const inputStyle = 'w-full px-4 mb-2 text-md';

export const TodoInput = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const { mutate } = useCreateTodoMutation();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = titleRef.current!.value;
    const content = contentRef.current!.value;
    console.log(title, content);
    mutate(
      { title, content },
      {
        onSuccess: () => {
          titleRef.current!.value = '';
          contentRef.current!.value = '';
        },
      },
    );
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col max-w-xl p-4 border-2 border-blue-100 rounded-md shadow">
      <Input ref={titleRef} className={inputStyle} placeholder="주제 (ex. 여행, 활동, 등산)" />
      <Input ref={contentRef} className={inputStyle} placeholder="할 일 (ex. 밥 먹기)" />
      <Button type="submit" className="w-20 py-2 mt-2">
        작성
      </Button>
    </form>
  );
};
