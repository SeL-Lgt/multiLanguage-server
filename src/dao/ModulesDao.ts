import Modules from '@/entity/Modules';
import dataSource from '@util/app-data-source';
import PaginationUtil from '@util/paginationUtil';

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
  static queryModulesList = (modules: Modules, pagination?: PaginationUtil) => {
    const { modulesKey } = modules;
    let data = dataSource.createQueryBuilder(Modules, 'modules');
    if (modulesKey) {
      data = data.where('modules.modulesKey = :modulesKey', { modulesKey });
    }
    if (pagination) {
      data = data.limit(pagination.pageSize).offset(pagination.start);
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

  /**
   * 查询父模块数量
   */
  static queryModulesCount = (modules?: Modules) => {
    let data = dataSource
      .createQueryBuilder(Modules, 'modules')
      .select('COUNT(*) total');
    if (modules) {
      const { modulesKey } = modules;
      if (modulesKey) {
        data = data.where('modules.modulesKey = :modulesKey', { modulesKey });
      }
    }
    return data.getRawOne();
  };
}
