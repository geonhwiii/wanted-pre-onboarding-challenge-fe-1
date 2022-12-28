import { AxiosError } from 'axios';
import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher as joinFetcher } from '@/utils/fetcher';
import { toast } from 'react-toastify';
import { TodoResponse } from '@/types/types';
import { queryKeys } from '@/constants/queryKeys';

type UpdateTodoProps = Readonly<{
  id: string;
  title: string;
  content: string;
}>;

const fetcher = ({ id, title, content }: UpdateTodoProps): Promise<TodoResponse> => joinFetcher.put(`/todos/${id}`, { title, content });

export const useUpdateTodoMutation = (): UseMutationResult<TodoResponse, AxiosError, UpdateTodoProps> => {
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
