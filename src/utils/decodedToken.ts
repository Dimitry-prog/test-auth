import jwt_decode from 'jwt-decode';

export const decodedToken = (token: string): string => {
  const decoded: {
    sub: string,
    iat: number,
    exp: number,
  } = jwt_decode(token);
  return decoded.sub
}