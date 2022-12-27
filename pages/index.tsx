import { useTodo } from '@/common/Hooks/queries/useTodo';
import Typography from '@/components/atomics/Typography';
import { TodoInput } from '@/components/molecules/TodoInput';
import { TodoList } from '@/components/molecules/TodoList';

export default function Home() {
  const { data, isLoading, isError } = useTodo();
  if (isLoading || isError) {
    return null;
  }
  return (
    <div className="flex flex-col p-10">
      <div className="mb-10">
        <Typography className="text-2xl font-bold text-blue-600">원티드 프리온보딩 챌린지 투두리스트</Typography>
      </div>
      <TodoInput />
      <TodoList items={data.data.data} />
    </div>
  );
}
