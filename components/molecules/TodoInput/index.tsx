import { useCreateTodoMutation } from '@/common/Hooks/mutations/todo/useCreateTodoMutation';
import Button from '@/components/atomics/Button';
import Input from '@/components/atomics/Input';
import { FormEvent, useRef } from 'react';
import { toast } from 'react-toastify';

export const TodoInput = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const { mutate } = useCreateTodoMutation();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = titleRef.current!.value;
    const content = contentRef.current!.value;
    if (!title.length) {
      toast.info('제목이 비었어요...');
    }
    mutate(
      { title, content: content.length ? content : '할 일이 없어요...' },
      {
        onSuccess: () => {
          titleRef.current!.value = '';
          contentRef.current!.value = '';
        },
      },
    );
  };
  return (
    <form onSubmit={onSubmit} className="relative flex flex-col py-4 rounded-md shadow">
      <div className="mr-24">
        <Input ref={titleRef} className={'w-full mb-4 text-md'} placeholder="주제 (ex. 여행, 활동, 등산)" />
        <Input ref={contentRef} className={'w-full mb-2 text-md'} placeholder="할 일 (ex. 밥 먹기)" />
      </div>
      <div className="absolute bottom-6 right-2">
        <Button type="submit" className="px-4 py-2 mr-2 text-sm">
          작성
        </Button>
      </div>
    </form>
  );
};
