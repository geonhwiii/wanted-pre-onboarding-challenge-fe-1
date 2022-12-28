import { configs } from '@/configs/index';
import { Storage } from '@/constants/storage';
import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: configs.baseUrl,
  withCredentials: true,
};

export const fetcher = axios.create(axiosConfig);

fetcher.interceptors.request.use((config) => {
  if (!config.headers) return config;
  let token: string | null = null;
  token = localStorage.getItem(Storage.AUTH_TOKEN);
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
