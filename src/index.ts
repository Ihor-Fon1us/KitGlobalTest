import express, { Express, Request, Response, urlencoded } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

const indexRouter = require('./routes/index');

export const app: Express = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

 
