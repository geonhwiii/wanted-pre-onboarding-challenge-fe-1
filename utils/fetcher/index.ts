import { configs } from '@/configs/index';
import axios from 'axios';

export const fetcher = axios.create({
  baseURL: configs.baseUrl,
  withCredentials: true,
});
