import config from '../config/server';
import jwt from 'jsonwebtoken';

let { auth } = config;
export default token => jwt.verify(token, auth.jwt.secret); 
