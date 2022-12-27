import { configs } from '@/configs/index';
import { Storage } from '@/constants/storage';
import axios from 'axios';

export const fetcher = axios.create({
  baseURL: configs.baseUrl,
  withCredentials: true,
});

fetcher.interceptors.request.use((config) => {
  if (!config.headers) return config;
  let token: string | null = null;
  token = localStorage.getItem(Storage.AUTH_TOKEN);
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
