import { StringValue } from 'ms';
console.log('JWT_SECRET:', process.env.JWT_SECRET)

export const jwtConfig = {
  secret: process.env.JWT_SECRET as string,


  accessTokenExpiresIn: '15m' as StringValue,
  refreshTokenExpiresIn: '7d' as StringValue,

};
