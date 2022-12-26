import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { fetcher as loginFetcher } from '@/utils/fetcher';
import { LoginResponse } from '@/types/types';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type LoginProps = Readonly<{
  email: string;
  password: string;
}>;

const fetcher = (value: LoginProps): Promise<LoginResponse> => loginFetcher.post('/users/login', value);

export const useLoginMutation = (): UseMutationResult<LoginResponse, AxiosError<any>, LoginProps> => {
  return useMutation(fetcher, {
    onSuccess: (data) => console.log('[SUCCESS]', data),
    onError: (error) => {
      const msg = error.response?.data?.details;
      toast.error(msg);
    },
  });
};
