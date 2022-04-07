import { NextFunction, Request, Response } from 'express';
import myDataSource from '../util/app-data-source';
import Mark from '../entity/Mark';
import langInitList from '../util/langInitList';

export default class MarkServices {
  static langMarkInit = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const mark = await myDataSource
        .createQueryBuilder()
        .insert()
        .into(Mark)
        .values(langInitList)
        .execute();
      res.json(mark);
    } catch (err) {
      next(err);
    }
  };
}
