import CopyWriting from '@/entity/CopyWriting';
import dataSource from '@util/app-data-source';
import PaginationUtil from '@util/paginationUtil';

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
  static queryCopyWriting = (
    copyWriting: CopyWriting,
    pagination?: PaginationUtil,
  ) => {
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
    if (pagination) {
      data = data.limit(pagination.pageSize).offset(pagination.start);
    }
    data.select([
      'copyWriting.modulesKey',
      'copyWriting.subModulesKey',
      'copyWriting.copyKey',
      'copyWriting.langKey',
      'copyWriting.langText',
    ]);
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

  /**
   * 文案更新
   * @param copyWriting
   */
  static updateCopyWriting = (copyWriting: CopyWriting) => {
    const { modulesKey, subModulesKey, langKey, copyKey, langText } =
      copyWriting;
    const data = dataSource
      .createQueryBuilder()
      .update(CopyWriting)
      .set({
        langText,
        updateUser: 'admin',
      })
      .where('modulesKey = :modulesKey', { modulesKey })
      .andWhere('subModulesKey = :subModulesKey', {
        subModulesKey,
      })
      .andWhere('langKey = :langKey', {
        langKey,
      })
      .andWhere('copyKey = :copyKey', {
        copyKey,
      });
    return data.execute();
  };

  /**
   * 批量更新
   * @param copyWriting
   */
  static updateCopyWritingByList = (copyWriting: Array<CopyWriting>) => {
    const data = dataSource.getRepository(CopyWriting).save(copyWriting);
    return data;
  };

  /**
   * 查询文案数量
   */
  static queryCopyWritingCount = (copyWriting: CopyWriting) => {
    const { modulesKey, subModulesKey, copyKey, langText, langKey } =
      copyWriting;
    let data = dataSource
      .createQueryBuilder(CopyWriting, 'copyWriting')
      .select('COUNT(*) total')
      .where('copyWriting.modulesKey = :modulesKey', {
        modulesKey,
      });
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
    return data.getRawOne();
  };
}
