import jwt from 'jsonwebtoken';
import config from '../config/server';

let { auth } = config;

export default (data) => {
  return jwt.sign(
    data,
    auth.jwt.secret,
    { expiresIn: '1d' });
}