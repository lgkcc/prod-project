import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { localStorageMock } from 'shared/lib/mockLocalStorage/mockLocalStorage';
import { UserSchema } from '../types/UserSchema';
import { userReducer, userActions } from '../slices/userSlice';

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('userSlice.test', () => {
  test('logoutData', () => {
    const state: UserSchema = { auth: { login: 'test', id: '1' } };
    expect(userReducer(state, userActions.logoutData)).toEqual({ auth: undefined });
  });
  test('setUserData', () => {
    const state: UserSchema = { auth: undefined };
    expect(userReducer(state, userActions.setUserData({ login: 'test', id: '1' }))).toEqual({ auth: { login: 'test', id: '1' } });
  });
  test('initialData with data', () => {
    localStorageMock.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify({ login: 'test', id: '1' }));
    expect(userReducer(undefined, userActions.initialData)).toEqual({ auth: { login: 'test', id: '1' } });
  });
  test('initialData without data', () => {
    localStorageMock.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(null));
    expect(userReducer(undefined, userActions.initialData)).toEqual({});
  });
});
