import { NextFunction, Request, Response } from 'express';
import SubModulesDao from '@dao/SubModulesDao';
import SubModules from '@/entity/SubModules';
import PaginationUtil from '@util/paginationUtil';

export default class SubModulesServices {
  /**
   * 新增子模块
   * @param _req
   * @param _res
   * @param next
   */
  static addSubModules = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = await SubModulesDao.addSubModules(body);
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
   * 查询子模块列表
   * @param _req
   * @param _res
   * @param next
   */
  static querySubModulesList = async (
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
      const data = await SubModulesDao.querySubModulesList(
        query as unknown as SubModules,
        pagination as PaginationUtil,
      );
      const { total } = await SubModulesDao.querySubModulesCount(
        query as unknown as SubModules,
      );
      next({
        status: 200,
        message: '请求成功',
        data: {
          row: data,
          total: parseInt(total, 10),
          current,
          pageSize,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  /**
   * 删除子模块
   * @param _req
   * @param _res
   * @param next
   */
  static deleteSubModules = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = await SubModulesDao.deleteSubModules(body);
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
   * 查询子模块名字列表
   * @param _req
   * @param _res
   * @param next
   */
  static querySubModulesNameList = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { query } = _req;
      const data = await SubModulesDao.querySubModulesNameList(
        query as unknown as SubModules,
      );
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
