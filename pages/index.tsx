import { useTodo } from '@/common/Hooks/queries/useTodo';
import Typography from '@/components/atomics/Typography';

export default function Home() {
  const { data, isLoading, isError } = useTodo();
  if (isLoading || isError) {
    return null;
  }
  return (
    <div className="text-blue-600">
      <Typography>원티드 프리온보딩 챌린지 FrontEnd</Typography>
    </div>
  );
}
