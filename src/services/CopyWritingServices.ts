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

      const reqLangList = langList.map((item: LangList) => item.langKey);

      // 判断是否存在重复key值
      if (
        reqLangList.filter(
          (i: string) => reqLangList.indexOf(i) !== reqLangList.lastIndexOf(i),
        ).length > 0
      ) {
        next({
          status: 500,
          message: '存在重复原类型',
        });
        return;
      }

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
        message: '添加成功',
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

  /**
   * 删除指定文案
   * @param _req
   * @param _res
   * @param next
   */
  static deleteCopyWriting = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const data = await CopyWritingDao.deleteCopyWriting(body);
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
   * 文案更新
   * @param _req
   * @param _res
   * @param next
   */
  static updateCopyWriting = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = _req;
      const { modulesKey, subModulesKey, copyKey, langList } = body;
      const oldCopyWriting = await CopyWritingDao.queryCopyWriting(
        body as CopyWriting,
      );
      const oldLangList = oldCopyWriting.map((item) => item.langKey);
      const reqLangList = langList.map((item: LangList) => item.langKey);

      // 判断是否存在重复key值
      if (
        reqLangList.filter(
          (i: string) => reqLangList.indexOf(i) !== reqLangList.lastIndexOf(i),
        ).length > 0
      ) {
        next({
          status: 500,
          message: '存在重复原类型',
        });
        return;
      }

      // 数据库语言类型 与 传入语言类型 进行比较
      // reqLangList.indexOf(item)为-1，则为删除的语言类型
      const deleteLangList = oldLangList.filter(
        (item: string) => reqLangList.indexOf(item) === -1,
      );

      // 传入语言类型 与 数据库语言类型 进行比较
      // oldLangList.indexOf(item)为-1，则为新增的语言类型
      const addLangList = reqLangList.filter(
        (item: string) => oldLangList.indexOf(item) === -1,
      );

      // 传入语言类型 与 数据库语言类型 进行比较
      // oldLangList.indexOf(item)>-1，则为修改的语言类型
      const updateList = reqLangList.filter(
        (item: string) => oldLangList.indexOf(item) > -1,
      );

      deleteLangList.forEach((item) => {
        const dataDao = new CopyWriting();
        dataDao.copyKey = copyKey;
        dataDao.modulesKey = modulesKey;
        dataDao.subModulesKey = subModulesKey;
        dataDao.langKey = item;
        CopyWritingDao.deleteCopyWriting(dataDao);
      });

      langList.forEach((item: LangList) => {
        const dataDao = new CopyWriting();
        dataDao.copyKey = copyKey;
        dataDao.modulesKey = modulesKey;
        dataDao.subModulesKey = subModulesKey;
        dataDao.langKey = item.langKey;
        dataDao.langText = item.langText;
        if (addLangList.indexOf(item.langKey) > -1) {
          CopyWritingDao.addCopyWriting(dataDao);
        }
        if (updateList.indexOf(item.langKey) > -1) {
          CopyWritingDao.updateCopyWriting(dataDao);
        }
      });

      next({
        status: 200,
        message: `新增文案类型${addLangList.length},修改文案类型${updateList.length},删除文案类型${deleteLangList.length}`,
      });
    } catch (err) {
      next(err);
    }
  };
}
