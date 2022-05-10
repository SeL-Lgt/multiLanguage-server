import dataSource from '@util/app-data-source';
import SubModules from '@/entity/SubModules';
import PaginationUtil from '@util/paginationUtil';

export default class SubModulesDao {
  /**
   * 新增子模块
   * @param {object<SubModules>} subModules
   */
  static addSubModules = (subModules: SubModules) => {
    const data = dataSource
      .createQueryBuilder()
      .insert()
      .into(SubModules)
      .values(subModules)
      .execute();
    return data;
  };

  /**
   * 查询子模块列表
   */
  static querySubModulesList = (
    subModules: SubModules,
    pagination?: PaginationUtil,
  ) => {
    const { modulesKey } = subModules;
    let data = dataSource
      .createQueryBuilder(SubModules, 'subModules')
      .where('subModules.modulesKey = :modulesKey', { modulesKey });
    if (pagination) {
      data = data.limit(pagination.pageSize).offset(pagination.start);
    }
    return data.getMany();
  };

  /**
   * 删除子模块
   * @param subModules
   */
  static deleteSubModules = (subModules: SubModules) => {
    const { modulesKey, subModulesKey } = subModules;
    const data = dataSource
      .createQueryBuilder()
      .delete()
      .from(SubModules)
      .where('modulesKey = :modulesKey', { modulesKey })
      .andWhere('subModulesKey = :subModulesKey', { subModulesKey })
      .execute();
    return data;
  };

  /**
   * 查询子模块名字列表
   */
  static querySubModulesNameList = (subModules: SubModules) => {
    const { modulesKey } = subModules;
    const data = dataSource
      .createQueryBuilder(SubModules, 'subModules')
      .where('subModules.modulesKey = :modulesKey', { modulesKey })
      .select(['subModules.modulesKey', 'subModules.subModulesKey']);
    return data.getMany();
  };

  /**
   * 查询子模块数量
   */
  static querySubModulesCount = (subModules: SubModules) => {
    const { modulesKey } = subModules;
    let data = dataSource
      .createQueryBuilder(SubModules, 'subModules')
      .select('COUNT(*) total');
    if (modulesKey) {
      data = data.where('subModules.modulesKey = :modulesKey', {
        modulesKey,
      });
    }
    return data.getRawOne();
  };
}
