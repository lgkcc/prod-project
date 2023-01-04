export interface User {
  id: string;
  login: string;
}

export interface UserSchema {
  auth?: User;
}
