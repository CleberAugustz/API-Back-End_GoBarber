import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';

import cors from 'cors';

import AppError from '@shared/errors/AppError';
import uploadConfig from '@config/upload';
import rateLimiter from './middlewares/rateLimiter';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/file', express.static(uploadConfig.uploadFolders));
app.use(rateLimiter);
app.use(routes);
/*
app.get('/', (request, response) =>{
    return response.json({ message: 'Hello World!'})
}) */

app.use(errors());
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    console.error(err);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log(`Server Started on port 3333`);
});
