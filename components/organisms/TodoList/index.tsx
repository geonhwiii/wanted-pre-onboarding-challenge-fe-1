import TodoCard from '@/components/molecules/TodoCard';
import { Todo } from '@/types/types';

type Props = {
  readonly items: Todo[];
};

export const TodoList = ({ items }: Props) => {
  return (
    <div>
      <ul className="flex flex-col">
        {items.map((item) => (
          <TodoCard key={item.id} className="mb-4" item={item} />
        ))}
      </ul>
    </div>
  );
};
