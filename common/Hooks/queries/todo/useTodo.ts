import { AxiosError } from 'axios';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { fetcher as todoFetcher } from '@/utils/fetcher';
import { toast } from 'react-toastify';
import { TodoResponse } from '@/types/types';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';
import { queryKeys } from '@/constants/queryKeys';

const fetcher = (): Promise<TodoResponse> => todoFetcher.get('/todos');

export const useTodo = (): UseQueryResult<TodoResponse, AxiosError> => {
  const router = useRouter();
  return useQuery([queryKeys.TODO], fetcher, {
    onError: (error) => {
      router.push(Routes.LOGIN);
      const err = error.response?.data as any;
      toast.error(err?.details);
    },
    retry: false,
  });
};
