import Modules from '@/entity/Modules';
import dataSource from '@util/app-data-source';

export default class ModulesDao {
  /**
   * 添加父模块
   * @param {Object<Modules>} modules
   */
  static addModules = (modules: Modules) => {
    const data = dataSource
      .createQueryBuilder()
      .insert()
      .into(Modules)
      .values(modules)
      .execute();
    return data;
  };

  /**
   * 查询所有模块列表
   * 详情信息与模块文案数量
   */
  static queryModulesList = (modules: Modules) => {
    const { modulesKey } = modules;
    let data = dataSource.createQueryBuilder(Modules, 'modules');
    if (modulesKey !== undefined) {
      data = data.where('modules.modulesKey = :modulesKey', { modulesKey });
    }
    return data.getMany();
  };

  /**
   * 更新父模块内容
   * @param modules
   */
  static updateModules = (modules: Modules) => {
    const { id, remark, modulesName, updateUser } = modules;
    const data = dataSource
      .createQueryBuilder()
      .update(Modules)
      .set({
        modulesName,
        remark,
        updateUser,
      })
      .where('id = :id', { id })
      .execute();
    return data;
  };

  /**
   * 查询所有模块名字
   * 仅查询名字
   */
  static queryModulesNameList = () => {
    const data = dataSource
      .createQueryBuilder(Modules, 'modules')
      .select(['modules.modulesKey']);
    return data.getMany();
  };
}
