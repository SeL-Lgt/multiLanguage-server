import { NextFunction, Request, Response } from 'express';
import MarkDao from '@dao/MarkDao';
import Mark from '@/entity/Mark';

export default class MarkServices {
  /**
   * 语言标识列表初始化
   * @method:POST
   */
  static langMarkInit = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const data = await MarkDao.langMarkInit();
      next({
        status: 200,
        message: '请求成功',
        data,
      });
    } catch (err) {
      next(err);
    }
  };

  /**
   * 查询语言标识列表
   * @method:POST
   * @param _req
   * @param res
   * @param next
   */
  static queryMarkList = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = await MarkDao.queryMarkList(body?.isUsed);
      next({
        status: 200,
        message: '请求成功',
        data,
      });
    } catch (err) {
      next(err);
    }
  };

  /**
   * 添加语言标识
   * @method:POST
   * @param _req
   * @param res
   * @param next
   */
  static addMark = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = await MarkDao.addMark(body as Mark);
      next({
        status: 200,
        message: '请求成功',
        data,
      });
    } catch (err) {
      next(err);
    }
  };

  /**
   * 修改语言标识信息
   * @method:POST
   * @param _req
   * @param res
   * @param next
   */
  static updateMark = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = await MarkDao.updateMark(body as Mark);
      next({
        status: 200,
        message: '请求成功',
        data,
      });
    } catch (err) {
      next(err);
    }
  };
}
