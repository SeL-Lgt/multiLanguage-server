import CopyWriting from '@/entity/CopyWriting';
import dataSource from '@util/app-data-source';

export default class CopyWritingDao {
  /**
   * 新增语言文案
   * @param copyWriting
   */
  static addCopyWriting = (copyWriting: CopyWriting | Array<CopyWriting>) => {
    const data = dataSource
      .createQueryBuilder()
      .insert()
      .into(CopyWriting)
      .values(copyWriting)
      .execute();
    return data;
  };

  /**
   * 查询语言文案
   * @param copyWriting
   */
  static queryCopyWriting = (copyWriting: CopyWriting) => {
    const { modulesKey, subModulesKey, langKey, langText, copyKey } =
      copyWriting;
    let data = dataSource
      .createQueryBuilder(CopyWriting, 'copyWriting')
      .where('copyWriting.modulesKey = :modulesKey', { modulesKey });
    if (subModulesKey) {
      data = data.andWhere('copyWriting.subModulesKey = :subModulesKey', {
        subModulesKey,
      });
    }
    if (copyKey) {
      data = data.andWhere('copyWriting.copyKey = :copyKey', {
        copyKey,
      });
    }
    if (langKey) {
      data = data.andWhere('copyWriting.langKey = :langKey', {
        langKey,
      });
    }
    if (langText) {
      data = data.andWhere('copyWriting.langText like :langText', {
        langText: `%${langText}%`,
      });
    }
    return data.getMany();
  };

  /**
   * 删除指定文案
   * @param copyWriting
   */
  static deleteCopyWriting = (copyWriting: CopyWriting) => {
    const { modulesKey, subModulesKey, langKey, copyKey, langText } =
      copyWriting;
    let data = dataSource
      .createQueryBuilder()
      .delete()
      .from(CopyWriting)
      .where('modulesKey = :modulesKey', { modulesKey })
      .andWhere('subModulesKey = :subModulesKey', {
        subModulesKey,
      });
    if (langKey) {
      data = data.andWhere('langKey = :langKey', { langKey });
    }
    if (copyKey) {
      data = data.andWhere('copyKey = :copyKey', { copyKey });
    }
    if (langText) {
      data = data.andWhere('langText = :langText', { langText });
    }
    return data.execute();
  };
}
