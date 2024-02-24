import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import rateLimiter from './middlewares/rateLimiter';
import { pagination } from 'typeorm-pagination';
import uploadConfig from '@config/upload';
import routes from './routes';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(rateLimiter);
app.use(pagination);

// Definicao da rota estatica para os arquivos no sistema
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    /*
      Se o erro for uma instancia da classe AppError, ou seja,
      tiver statusCode e message foi um erro da aplicacao,
      senao foi do servidor
      */
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333! ✅');
});
