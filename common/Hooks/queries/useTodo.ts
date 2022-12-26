import { AxiosError } from 'axios';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { fetcher as joinFetcher } from '@/utils/fetcher';
import { toast } from 'react-toastify';
import { TodoResponse } from '@/types/types';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';
import { queryKeys } from '@/constants/queryKeys';

const fetcher = (): Promise<TodoResponse> => joinFetcher.get('/todos');

export const useTodo = (): UseQueryResult<TodoResponse, AxiosError<any>> => {
  const router = useRouter();
  return useQuery([queryKeys.TODO], fetcher, {
    onSuccess: () => router.push(Routes.LOGIN),
    onError: (error) => {
      router.push(Routes.LOGIN);
      toast.error(error.response?.data?.details);
    },
    retry: false,
  });
};
