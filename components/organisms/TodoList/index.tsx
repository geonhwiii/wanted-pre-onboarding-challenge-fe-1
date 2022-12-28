import TodoCard from '@/components/molecules/TodoCard';
import { Todo } from '@/types/types';

type Props = {
  readonly items: Todo[];
};

export const TodoList = ({ items }: Props) => {
  return (
    <div>
      <ul className="flex flex-col-reverse">
        {items.map((item) => (
          <TodoCard key={item.id} className="mb-2" item={item} />
        ))}
      </ul>
    </div>
  );
};
