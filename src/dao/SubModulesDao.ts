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

  static deleteSubModules = (subModules: SubModules) => {
    const { modulesKey, subModulesKey } = subModules;
    const data = dataSource
      .createQueryBuilder()
      .delete()
      .from(SubModules)
      .where('modulesKey = :modulesKey', { modulesKey })
      .where('subModulesKey = :subModulesKey', { subModulesKey })
      .execute();
    return data;
  };
}
