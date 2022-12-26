import { useMutation } from '@tanstack/react-query';
import { fetcher as joinFetcher } from '@/utils/fetcher';

type loginProps = Readonly<{
  email: string;
  password: string;
}>;

const fetcher = (value: loginProps) => joinFetcher.post('/users/create', value);

export const useJoinMutation = () => {
  return useMutation(fetcher, { onSuccess: (data) => console.log('[SUCCESS]', data) });
};
