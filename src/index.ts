import express, { Express, NextFunction, Request, Response, urlencoded } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { IError } from './interfaces/IError';
import { access, mkdirSync } from 'fs';

const indexRouter = require('./routes/index');

export const app: Express = express();

access('./public/notifications.log', (err) => {
    if (err) {
      mkdirSync('./public/notifications.log', { recursive: true });
    }
  });

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(function (error: IError, req: Request, res: Response, next: NextFunction) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
      fails: error.fails,
    });
  });
 
