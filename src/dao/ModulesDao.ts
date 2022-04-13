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
   */
  static queryModulesList = (modules: Modules) => {
    const { modulesName } = modules;
    let data = dataSource.createQueryBuilder(Modules, 'modules');
    if (modulesName !== undefined) {
      data = data.where('modules.modulesName = :modulesName', { modulesName });
    }
    return data.getMany();
  };

  /**
   * 更新父模块内容
   * @param modules
   */
  static updateModules = (modules: Modules) => {
    const { id, remark, updateUser } = modules;
    const data = dataSource
      .createQueryBuilder()
      .update(Modules)
      .set({
        remark,
        updateUser,
      })
      .where('id = :id', { id })
      .execute();
    return data;
  };
}
