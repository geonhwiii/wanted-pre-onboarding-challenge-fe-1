import cx from 'classnames';
import { Todo } from '@/types/types';
import Typography from '@/components/atomics/Typography';
import Button from '@/components/atomics/Button';
import { useDeleteTodoMutation } from '@/common/Hooks/mutations/useDeleteTodoMutation';
import { useCallback, useState } from 'react';
import Input from '@/components/atomics/Input';
import EditCard from './EditCard';

type Props = {
  readonly className?: string;
  readonly item: Todo;
};

export default function TodoCard({ className, item }: Props) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { mutate: deleteTodo } = useDeleteTodoMutation();
  const { id, title, content } = item;
  const onToggleEdit = () => setEditMode((prev) => !prev);
  const onDelete = () => deleteTodo({ id });
  return (
    <li className={cx('relative  p-8 pb-14 border-2 border-gray-100 rounded-md shadow-md', className)}>
      {!editMode ? (
        <div className="flex flex-col">
          <div className="mb-4">
            <Typography className="text-2xl font-bold">{title}</Typography>
          </div>
          <div className="overflow-auto whitespace-pre-wrap max-h-40">
            <Typography className="text-gray-600">{content}</Typography>
          </div>
          <div className="absolute bottom-2 right-2">
            <Button className="px-4 py-2 mr-2 text-sm bg-gray-400" onClick={onToggleEdit}>
              수정
            </Button>
            <Button className="px-4 py-2 text-sm bg-red-400" onClick={onDelete}>
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
