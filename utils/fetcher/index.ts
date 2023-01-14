import { configs } from '@/configs/index';
import { Storage } from '@/constants/storage';
import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: configs.baseUrl,
  withCredentials: true,
};

export const fetcher = axios.create(axiosConfig);

fetcher.interceptors.request.use(setBearerTokenConfig);

function setBearerTokenConfig(config: AxiosRequestConfig) {
  if (!config.headers) {
    return config;
  }
  const token = localStorage.getItem(Storage.AUTH_TOKEN);
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  return config;
}
