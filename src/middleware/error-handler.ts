import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

const errorHandler =
  () =>
  (error: HttpException, _req: Request, res: Response, _next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || '服务器异常';
    res.status(status).send({
      message,
      status,
    });
  };

export default errorHandler;
