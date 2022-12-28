import { AxiosError } from 'axios';
import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher as joinFetcher } from '@/utils/fetcher';
import { toast } from 'react-toastify';
import { TodoResponse } from '@/types/types';
import { queryKeys } from '@/constants/queryKeys';

type CreateTodoProps = Readonly<{
  title: string;
  content: string;
}>;

const fetcher = (value: CreateTodoProps): Promise<TodoResponse> => joinFetcher.post('/todos', value);

export const useCreateTodoMutation = (): UseMutationResult<TodoResponse, AxiosError, CreateTodoProps> => {
  const queryClient = useQueryClient();
  return useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.TODO]);
    },
    onError: (error) => {
      const err = error.response?.data as any;
      toast.error(err.detail as string);
    },
  });
};
