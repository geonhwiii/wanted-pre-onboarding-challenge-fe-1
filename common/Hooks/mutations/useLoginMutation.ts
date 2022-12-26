import { useMutation } from '@tanstack/react-query';
import { fetcher as loginFetcher } from '@/utils/fetcher';

type loginProps = Readonly<{
  email: string;
  password: string;
}>;

const fetcher = (value: loginProps) => loginFetcher.post('/users/login', value);

export const useLoginMutation = () => {
  return useMutation(fetcher, { onSuccess: (data) => console.log('[SUCCESS]', data) });
};
