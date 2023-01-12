import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('should return authData state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        auth: {
          login: 'test',
          id: '1',
        },
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({ login: 'test', id: '1' });
  });
});
