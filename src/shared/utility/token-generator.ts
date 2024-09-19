import * as jwt from 'jsonwebtoken';
// import config from 'config';
const config = require("config");


export const generateAuthToken = (id: string) => {
  return jwt.sign({ id }, config.get('jwtSecret'), {
    expiresIn: '30d',
  });
};

export const decodeAuthToken = (token: string) => {
  return jwt.verify(token, config.get('jwtSecret'));
};