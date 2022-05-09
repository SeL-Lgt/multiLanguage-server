import { NextFunction, Request, Response } from 'express';
import MarkDao from '@dao/MarkDao';
import Mark from '@/entity/Mark';
import PaginationUtil from '@util/paginationUtil';

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
   * @method:GET
   */
  static queryMarkList = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { query } = _req;
      const { isUsed, current, pageSize } =
        query as unknown as PaginationUtil & {
          isUsed: string;
        };
      /**
       * 携带current当前页数，则认为是分页请求，进行分页初始化
       */
      let pagination;
      if (current) {
        pagination = new PaginationUtil({ current, pageSize });
      }
      /**
       * 由于GET请求，获取的布尔值会变为字符串，需要进行转译
       */
      const { total } = await MarkDao.queryMarkCount({
        isUsed: isUsed && isUsed !== 'false',
      } as Mark);
      const data = await MarkDao.queryMarkList(
        { isUsed: isUsed && isUsed !== 'false' } as Mark,
        pagination as PaginationUtil,
      );
      next({
        status: 200,
        message: '请求成功',
        data: {
          row: data,
          total: parseInt(total, 10),
          current: pagination?.current,
          pageSize: pagination?.pageSize,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  /**
   * 添加语言标识
   * @method:POST
   * @param _req
   * @param _res
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
   * @param _res
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
