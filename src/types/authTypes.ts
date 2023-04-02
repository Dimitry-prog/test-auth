export type AuthData = {
  email: string;
  password: string;
}

export type ResponseRegisterUser = {
  isRegistered: boolean;
}

export type ResponseLoginUser = {
  token: string;
}