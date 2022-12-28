import { useUpdateTodoMutation } from '@/common/Hooks/mutations/useUpdateTodoMutation';
import Button from '@/components/atomics/Button';
import Input from '@/components/atomics/Input';
import { Todo } from '@/types/types';
import { FormEvent, useRef } from 'react';

type Props = {
  readonly todo: Todo;
  readonly onCancel: () => void;
};

export default function EditCard({ todo, onCancel }: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const { id, title, content } = todo;
  const onUpdate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updateTitle = titleRef.current!.value;
    const updateContent = contentRef.current!.value;
    if (!updateTitle.length || !updateContent.length) {
      onCancel();
      return;
    }
    updateTodo({ id, title: updateTitle, content: updateContent });
    onCancel();
  };
  return (
    <form className="flex flex-col" onSubmit={onUpdate}>
      <div className="mb-4">
        <Input ref={titleRef} defaultValue={title} className="w-full text-2xl font-bold" />
      </div>
      <div className="overflow-auto whitespace-pre-wrap max-h-40">
        <Input ref={contentRef} defaultValue={content} className="w-full text-gray-600" />
      </div>
      <div className="absolute bottom-2 right-2">
        <Button type="submit" className="px-4 py-2 mr-2 text-sm bg-blue-400">
          저장
        </Button>
        <Button className="px-4 py-2 text-sm bg-red-400" onClick={onCancel}>
          취소
        </Button>
      </div>
    </form>
  );
}
