import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetcher as todoFetcher } from '@/utils/fetcher';
import { TodoResponse } from '@/types/types';
import { queryKeys } from '@/constants/queryKeys';
import { useState } from 'react';
import { Storage } from '@/constants/storage';

const fetcher = (): Promise<TodoResponse> => todoFetcher.get('/todos');

export const useAuth = () => {
  const queryClient = new QueryClient();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem(Storage.AUTH_TOKEN);
  };
  useQuery([queryKeys.TODO], fetcher, {
    onSuccess: () => setIsLoggedIn(true),
    onError: () => {
      logout();
      queryClient.clear();
    },
    retry: false,
  });

  return { isLoggedIn, logout };
};
