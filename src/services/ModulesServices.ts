import { NextFunction, Request, Response } from 'express';
import ModulesDao from '@dao/ModulesDao';
import Modules from '@/entity/Modules';
import PaginationUtil from '@util/paginationUtil';

export default class ModulesServices {
  /**
   * 新增父模块信息
   * @method:POST
   */
  static addModules = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = await ModulesDao.addModules(body);
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
   * @method:GET
   */
  static queryModulesList = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { query } = _req;
      const { pageSize, current } = query as unknown as PaginationUtil;
      /**
       * 携带current当前页数，则认为是分页请求，进行分页初始化
       */
      let pagination;
      if (current) {
        pagination = new PaginationUtil({ current, pageSize });
      }
      const data = await ModulesDao.queryModulesList(
        query as unknown as Modules,
        pagination as PaginationUtil,
      );
      const { total } = await ModulesDao.queryModulesCount(
        query as unknown as Modules,
      );
      next({
        status: 200,
        message: '请求成功',
        data: {
          row: data,
          total: parseInt(total, 10),
          current: pagination?.getCurrent(),
          pageSize: pagination?.getPageSize(),
        },
      });
    } catch (err) {
      next(err);
    }
  };

  /**
   * 更新父模块内容
   * @method:PUT
   */
  static updateModules = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = await ModulesDao.updateModules(body);
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
   * 查询所有模块名字
   * @method:GET
   */
  static queryModulesNameList = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const data = await ModulesDao.queryModulesNameList();
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
