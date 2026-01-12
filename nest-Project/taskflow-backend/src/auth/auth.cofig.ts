import { StringValue } from 'ms';

export const jwtConfig = {
  secret: process.env.JWT_SECRET as string,

  accessTokenExpiresIn: '15m' as StringValue,
  refreshTokenExpiresIn: '7d' as StringValue,
};
