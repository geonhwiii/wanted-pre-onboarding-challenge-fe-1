import cx from 'classnames';
import { Todo } from '@/types/types';
import Typography from '@/components/atomics/Typography';
import Button from '@/components/atomics/Button';
import { useCallback, useState } from 'react';
import Input from '@/components/atomics/Input';
import EditCard from './EditCard';
import { useDeleteTodoMutation } from '@/common/Hooks/mutations/todo/useDeleteTodoMutation';

type Props = {
  readonly className?: string;
  readonly item: Todo;
};

export default function TodoCard({ className, item }: Props) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { mutate: deleteTodo } = useDeleteTodoMutation();
  const { id, title, content } = item;
  const onToggleEdit = () => setEditMode((prev) => !prev);
  const onDelete = () => {
    if (!window.confirm('정말로 지우시겠습니까...?')) return;
    deleteTodo({ id });
  };
  return (
    <li className={cx('relative py-4 border-b border-b-gray-900', className)}>
      {!editMode ? (
        <div className="flex flex-col">
          <div className="mb-4">
            <Typography className="font-bold text-gray-300 text-md">{title}</Typography>
          </div>
          <div className="mr-36">
            <Typography className="text-gray-400 whitespace-normal text-md">{content}</Typography>
          </div>
          <div className="absolute bottom-2 right-2">
            <Button className="px-4 py-2 mr-2 text-sm bg-gray-800" onClick={onToggleEdit}>
              수정
            </Button>
            <Button className="px-4 py-2 text-sm bg-red-900" onClick={onDelete}>
              삭제
            </Button>
          </div>
        </div>
      ) : (
        <EditCard todo={item} onCancel={onToggleEdit} />
      )}
    </li>
  );
}
