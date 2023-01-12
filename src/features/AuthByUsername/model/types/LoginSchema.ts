import { LoadingStatus } from 'shared/types/LoadingStatus';

export interface LoginSchema {
  login: string;
  password: string;
  status?: LoadingStatus;
  error?: string;
}
