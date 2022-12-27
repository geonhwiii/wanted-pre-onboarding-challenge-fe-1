import { Todo } from '@/types/types';

type Props = {
  readonly items: Todo[];
};

export const TodoList = ({ items }: Props) => {
  return (
    <div>
      <ul className="flex flex-col">
        {items?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
