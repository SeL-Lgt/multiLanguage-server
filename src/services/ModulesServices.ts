import { NextFunction, Request, Response } from 'express';
import ModulesDao from '@dao/ModulesDao';

export default class ModulesServices {
  /**
   * 新增父模块信息
   * @method:POST
   * @param _req
   * @param _res
   * @param next
   */
  static addModules = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = ModulesDao.addModules(body);
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
   * 查询所有模块列表
   * @param _req
   * @param _res
   * @param next
   */
  static queryModulesList = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = ModulesDao.queryModulesList(body);
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
   * 更新父模块内容
   * @param _req
   * @param _res
   * @param next
   */
  static updateModules = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = ModulesDao.updateModules(body);
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
