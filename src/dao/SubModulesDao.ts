import dataSource from '@util/app-data-source';
import SubModules from '@/entity/SubModules';

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
  static querySubModulesList = (subModules: SubModules) => {
    const { modulesKey } = subModules;
    const data = dataSource
      .createQueryBuilder(SubModules, 'subModules')
      .where('subModules.modulesKey = :modulesKey', { modulesKey });
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
}
