import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt, { UnauthorizedError as Jwt401Error } from 'express-jwt';
import jwt from 'jsonwebtoken';
import express from 'express';
import cors from 'cors';
import consign from 'consign';
import logger from 'morgan';
import path from 'path';

import config from './config/server';
import auth from './auth';
import models from './data/models';

let app = express();

//
// Load Models
// -----------------------------------------------------------------------------
models(app);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
// Authentication
// -----------------------------------------------------------------------------
const authentication = auth(app);

app.set('authenticate', authentication.authenticate());
app.use(authentication.initialize());


consign({cwd: 'src'})
  .then('routes')
  .into(app);

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(res.locals.error);
});


export default app;
