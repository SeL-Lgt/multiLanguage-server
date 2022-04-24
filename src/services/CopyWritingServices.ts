import { NextFunction, Request, Response } from 'express';
import CopyWriting, { LangList } from '@/entity/CopyWriting';
import CopyWritingDao from '@dao/CopyWritingDao';
// import MarkDao from '@dao/MarkDao';
// import CopyWritingDao from '@dao/CopyWritingDao';

export default class CopyWritingServices {
  /**
   * 新增语言文案
   * @param _req
   * @param _res
   * @param next
   */
  static addCopyWriting = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const { modulesKey, subModulesKey, copyKey, langList } =
        body as CopyWriting;

      // TODO:校验语言类型是否存在
      // const markList = await MarkDao.queryMarkList();
      // const usedMarkList = markList.map((item) => item.langKey);
      // langList?.forEach((item) => {
      //   if (usedMarkList.indexOf(item.langKey) < 0) {
      //     next({
      //       status: 500,
      //       message: '存在未被注册是语言类型',
      //       data: item,
      //     });
      //   }
      // });
      const temp = langList?.map((item) => {
        const copyWritingItem = new CopyWriting();
        copyWritingItem.copyKey = copyKey;
        copyWritingItem.modulesKey = modulesKey;
        copyWritingItem.subModulesKey = subModulesKey;
        copyWritingItem.langKey = item.langKey;
        copyWritingItem.langText = item.langText;
        return copyWritingItem;
      });
      const data = await CopyWritingDao.addCopyWriting(temp);
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
   * 查询语言文案列表
   * @param _req
   * @param _res
   * @param next
   */
  static queryCopyWriting = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { query } = _req;
      const data = await CopyWritingDao.queryCopyWriting(
        query as unknown as CopyWriting,
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

  /**
   * 根据modulesKey、subModulesKey、copyKey查询文案详情
   * @param _req
   * @param _res
   * @param next
   */
  static queryCopyWritingByCopyKey = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { query } = _req;
      const { modulesKey, subModulesKey, copyKey } =
        query as unknown as CopyWriting;
      const copyWritingList = await CopyWritingDao.queryCopyWriting({
        modulesKey,
        subModulesKey,
        copyKey,
      } as CopyWriting);
      console.log(copyWritingList);
      const copyWritingItem = new CopyWriting();
      const langList: Array<LangList> = [];
      copyWritingList?.forEach((item) => {
        copyWritingItem.copyKey = item.copyKey;
        copyWritingItem.modulesKey = item.modulesKey;
        copyWritingItem.subModulesKey = item.subModulesKey;
        langList.push({
          langKey: item.langKey,
          langText: item.langText,
        });
        copyWritingItem.langList = langList;
      });
      next({
        status: 200,
        message: '请求成功',
        data: copyWritingItem,
      });
    } catch (err) {
      next(err);
    }
  };
}
