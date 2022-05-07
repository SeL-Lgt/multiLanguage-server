import { NextFunction, Request, Response } from 'express';
import CopyWriting from '@/entity/CopyWriting';
import CopyWritingDao from '@dao/CopyWritingDao';
import importExcelFromBuffer, {
  convertKeys,
  exportExcelFromData,
} from '@util/importExcelFromBuffer';
import MarkDao from '@dao/MarkDao';
import ModulesDao from '@dao/ModulesDao';
import SubModulesDao from '@dao/SubModulesDao';
import SubModules from '@/entity/SubModules';
import CopyWritingType from '@/type/CopyWritingServices';

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

      const reqLangList = langList.map(
        (item: CopyWritingType.LangList) => item.langKey,
      );

      // 判断是否存在重复key值
      if (
        reqLangList.filter(
          (i: string) => reqLangList.indexOf(i) !== reqLangList.lastIndexOf(i),
        ).length > 0
      ) {
        next({
          status: 500,
          message: '存在重复语言类型',
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
      const langList: Array<CopyWritingType.LangList> = [];
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
      const reqLangList = langList.map(
        (item: CopyWritingType.LangList) => item.langKey,
      );

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

      langList.forEach((item: CopyWritingType.LangList) => {
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

  /**
   * 上传文案
   * @param _req
   * @param _res
   * @param next
   */
  static uploadCopy = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const keyMaps = {
        父模块: 'modulesKey',
        子模块: 'subModulesKey',
        对应key值: 'copyKey',
        语言标识: 'langKey',
        文案: 'langText',
      };
      const { file, body } = _req;
      const { modulesKey } = body;
      const eventList: CopyWritingType.UploadEvent = {
        updateList: [],
        createList: [],
        errorList: [],
      };
      // 查询父模块是否存在数据库中
      const isHaveModule = (await ModulesDao.queryModulesNameList()).filter(
        (item) => item.modulesKey === modulesKey,
      );
      if (isHaveModule.length < 1) {
        throw new Error('请选择父模块导入文案');
      }

      /**
       * 处理接受数据，给相应key值，并转为Map对象处理Key值重复问题
       */
      const excelData = importExcelFromBuffer(
        file?.buffer as unknown as Buffer,
      );
      const convertData: Array<CopyWriting> = convertKeys(excelData, keyMaps);
      const data = new Map();
      convertData.forEach((item) => {
        const { subModulesKey, langKey, copyKey } = item;
        data.set(`${subModulesKey}_${langKey}_${copyKey}`, item);
      });

      // 查询该父模块下的所有文案
      const copyWritingDaoData = await CopyWritingDao.queryCopyWriting({
        modulesKey,
      } as CopyWriting);
      const daoData = new Map();
      copyWritingDaoData.forEach((item) => {
        const { subModulesKey, langKey, copyKey } = item;
        daoData.set(`${subModulesKey}_${langKey}_${copyKey}`, item);
      });

      // 查询已使用的语言标识
      const isUsedMark = (await MarkDao.queryMarkList(true)).map(
        (item) => item.langKey,
      );
      // 查询该父模块下的子模块标识
      const isUsedSubModuleList = (
        await SubModulesDao.querySubModulesNameList({
          modulesKey,
        } as SubModules)
      ).map((item) => item.subModulesKey);

      for (const [key, item] of data) {
        if (item.modulesKey !== modulesKey) {
          const errorMsg = '不属于该父模块文案';
          eventList.errorList.push({
            ...item,
            errorMsg,
          });
          continue;
        }
        if (isUsedMark.indexOf(item.langKey) === -1) {
          const errorMsg = '没有对应语言标识';
          eventList.errorList.push({
            ...item,
            errorMsg,
          });
          continue;
        }
        if (isUsedSubModuleList.indexOf(item.subModulesKey) === -1) {
          const errorMsg = '没有对应的子模块';
          eventList.errorList.push({
            ...item,
            errorMsg,
          });
          continue;
        }

        if (daoData.get(key)) {
          eventList.updateList.push(item);
        } else {
          eventList.createList.push(item);
        }
      }

      await CopyWritingDao.addCopyWriting(eventList.createList);
      await CopyWritingDao.updateCopyWritingByList(eventList.updateList);

      const { errorList, updateList, createList } = eventList;
      next({
        status: 200,
        message:
          errorList.length > 0
            ? '上传文案成功，但存在错误文案'
            : '上传文案成功',
        data: {
          errorList,
          updateList: updateList.length,
          createList: createList.length,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  /**
   * 下载文案
   * @param _req
   * @param _res
   * @param next
   */
  static downLoadCopyWriter = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const keyMaps = {
        modulesKey: '父模块',
        subModulesKey: '子模块',
        copyKey: '对应key值',
        langKey: '语言标识',
        langText: '文案',
        errorMsg: '错误信息',
      };
      const { body } = _req;
      const { type, modulesKey } = body;
      let { data } = body;
      const excelMimeType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

      // 查询父模块是否存在数据库中
      const isHaveModule = (await ModulesDao.queryModulesNameList()).filter(
        (item) => item.modulesKey === modulesKey,
      );
      if (isHaveModule.length < 1) {
        throw new Error('请选择父模块导出文案');
      }
      data =
        type === 'error'
          ? data
          : await CopyWritingDao.queryCopyWriting({
              modulesKey,
            } as CopyWriting);

      const convertData: Array<CopyWriting> = convertKeys(data, keyMaps);
      const fileBuffer = exportExcelFromData(
        convertData,
        type === 'error' ? '错误文案' : modulesKey,
      );
      _res.writeHead(200, { 'Content-Type': excelMimeType });
      _res.end(Buffer.from(fileBuffer, 'binary'));
    } catch (err) {
      next(err);
    }
  };

  static downloadDefaultCopyExcel = async (
    _req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    try {
      const keyMaps = {
        modulesKey: '父模块',
        subModulesKey: '子模块',
        copyKey: '对应key值',
        langKey: '语言标识',
        langText: '文案',
        errorMsg: '错误信息',
      };
      const excelMimeType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      const data = new CopyWriting();
      data.modulesKey = '例：DMS-PC';
      data.subModulesKey = '例：test';
      data.copyKey = '例：key';
      data.langKey = '例：zh-CN';
      data.langText = '例：测试文案';
      const convertData: Array<CopyWriting> = convertKeys([data], keyMaps);
      const fileBuffer = exportExcelFromData(convertData, '上传文案Excel模板');
      _res.writeHead(200, { 'Content-Type': excelMimeType });
      _res.end(Buffer.from(fileBuffer, 'binary'));
    } catch (err) {
      next(err);
    }
  };
}
