// export const BASE_AUTH_URL = 'http://62.84.116.103:8083/api/v1/auth';
// export const BASE_USER_URL = 'http://62.84.116.103:8083/api/v1/user';

export const BASE_AUTH_URL = '/data';
export const BASE_USER_URL = '/data';

export const navLinks = [
  { path: '/', text: 'Главная', protected: false },
  { path: 'signup', text: 'Регистрация', protected: false },
  { path: 'signin', text: 'Вход', protected: false },
  { path: 'profile', text: 'Профиль', protected: true },
];
