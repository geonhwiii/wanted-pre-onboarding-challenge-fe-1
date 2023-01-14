import { AxiosError } from 'axios';
import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher as joinFetcher } from '@/utils/fetcher';
import { toast } from 'react-toastify';
import { TodoResponse } from '@/types/types';
import { queryKeys } from '@/constants/queryKeys';

type DeleteTodoProps = Readonly<{
  id: string;
}>;

const fetcher = (value: DeleteTodoProps): Promise<TodoResponse> => joinFetcher.delete(`/todos/${value.id}`);

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.TODO]);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const err = error.response?.data;
        toast.error(err.detail);
      }
    },
  });
};
