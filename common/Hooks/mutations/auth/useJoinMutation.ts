import { AxiosError } from 'axios';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { fetcher as joinFetcher } from '@/utils/fetcher';
import { toast } from 'react-toastify';
import { JoinResponse } from '@/types/types';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';

type JoinProps = Readonly<{
  email: string;
  password: string;
}>;

const fetcher = (value: JoinProps): Promise<JoinResponse> => joinFetcher.post('/users/create', value);

export const useJoinMutation = () => {
  const router = useRouter();
  return useMutation(fetcher, {
    onSuccess: ({ data }) => {
      router.push(Routes.LOGIN).then(() => toast.success(data.message));
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const err = error.response?.data;
        toast.error(err.detail);
      }
    },
  });
};
