import cx from 'classnames';
import { Todo } from '@/types/types';
import Typography from '@/components/atomics/Typography';

type Props = {
  readonly className?: string;
  readonly item: Todo;
};

export default function TodoCard({ className, item }: Props) {
  const { title, content } = item;
  return (
    <li className={cx('flex flex-col p-8 border-2 border-gray-100 rounded-md shadow-md', className)}>
      <div className="mb-4">
        <Typography className="text-2xl font-bold">{title}</Typography>
      </div>
      <div className="overflow-auto whitespace-pre-wrap max-h-40">
        <Typography className="text-gray-600">{content}</Typography>
      </div>
    </li>
  );
}
