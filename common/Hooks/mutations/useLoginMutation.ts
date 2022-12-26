import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { fetcher as loginFetcher } from '@/utils/fetcher';
import { LoginResponse } from '@/types/types';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';
import { Storage } from '@/constants/storage';

type LoginProps = Readonly<{
  email: string;
  password: string;
}>;

const fetcher = (value: LoginProps): Promise<LoginResponse> => loginFetcher.post('/users/login', value);

export const useLoginMutation = (): UseMutationResult<LoginResponse, AxiosError<any>, LoginProps> => {
  const routes = useRouter();
  return useMutation(fetcher, {
    onSuccess: ({ data }) => {
      localStorage.setItem(Storage.AUTH_TOKEN, data.token);
      routes.push(Routes.HOME).then(() => toast.success(data.message));
    },
    onError: (error) => {
      const msg = error.response?.data?.details;
      toast.error(msg);
    },
  });
};
