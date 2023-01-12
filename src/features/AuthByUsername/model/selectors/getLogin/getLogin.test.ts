import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLogin } from './getLogin';

describe('getLogin', () => {
  test('should return authData state', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        login: 'test',
        password: '1',
      },
    };
    expect(getLogin(state as StateSchema)).toEqual({ login: 'test', password: '1' });
  });
});
