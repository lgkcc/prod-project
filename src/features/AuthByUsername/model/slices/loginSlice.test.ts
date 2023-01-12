import { loginActions, loginReducer } from '../slices/loginSlice';
import { LoginSchema } from '../types/LoginSchema';

describe('loginSlice.test', () => {
  test('setLogin', () => {
    const state: LoginSchema = { login: 'tes', password: '1' };
    expect(loginReducer(state, loginActions.setLogin('test'))).toEqual({ login: 'test', password: '1' });
  });
  test('setPassword', () => {
    const state: LoginSchema = { login: 'test', password: '1' };
    expect(loginReducer(state, loginActions.setPassword('123'))).toEqual({ login: 'test', password: '123' });
  });
  test('resetError', () => {
    const state: LoginSchema = { login: 'test', password: '123', error: 'Ошибка' };
    expect(loginReducer(state, loginActions.resetError)).toEqual({ login: 'test', password: '123', error: undefined });
  });
});
