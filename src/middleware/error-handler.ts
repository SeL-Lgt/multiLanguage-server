import { NextFunction, Request, Response } from 'express';
import HttpException from '@exceptions/HttpException';

const errorHandler =
  () =>
  (err: HttpException, _req: Request, _res: Response, _next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || '服务器异常';
    const data = err.data || null;

    _res.status(status).json({
      message,
      status,
      data,
    });
  };

export default errorHandler;
