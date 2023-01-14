import { useTodo } from '@/common/Hooks/queries/todo/useTodo';
import { TodoInput } from '@/components/molecules/TodoInput';
import { TodoList } from '@/components/organisms/TodoList';

export default function Home() {
  const { data, isLoading, isError } = useTodo();
  if (isLoading || isError) {
    return null;
  }
  return (
    <div className="flex flex-col p-4">
      <TodoList items={data.data.data} />
      <TodoInput />
    </div>
  );
}
