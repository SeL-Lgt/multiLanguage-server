import dataSource from '@/util/app-data-source';
import Mark from '@/entity/Mark';
import langInitList from '@/util/langInitList';
import PaginationUtil from '@util/paginationUtil';

export default class MarkDao {
  /**
   * 初始化语言包
   */
  static langMarkInit = () => {
    const data = dataSource
      .createQueryBuilder()
      .insert()
      .into(Mark)
      .values(langInitList)
      .execute();
    return data;
  };

  /**
   * 查询语言标识列表
   * @return {Array<Mark>} 语言标识列表
   * @param mark
   * @param pagination
   */
  static queryMarkList = (mark: Mark, pagination?: PaginationUtil) => {
    const { isUsed } = mark;
    let data = dataSource.createQueryBuilder(Mark, 'mark');
    if (typeof isUsed === 'boolean') {
      data = data.where('mark.isUsed = :isUsed', { isUsed });
    }
    if (pagination) {
      data = data.limit(pagination.pageSize).offset(pagination.start);
    }
    return data.getMany();
  };

  /**
   * 新增语言标识
   * 将语言标识使用状态更改为 已使用
   * @param mark
   */
  static addMark = (mark: Mark) => {
    const { langKey, remark } = mark;
    const data = dataSource
      .createQueryBuilder()
      .update(Mark)
      .set({
        isUsed: true,
        remark,
        updateUser: 'admin',
      })
      .where('langKey = :langKey', { langKey })
      .execute();
    return data;
  };

  /**
   * 修改语言标识信息
   * @param mark
   */
  static updateMark = (mark: Mark) => {
    const { langKey, remark } = mark;
    const data = dataSource
      .createQueryBuilder()
      .update(Mark)
      .set({
        remark,
        updateUser: 'admin',
      })
      .where('langKey = :langKey', { langKey })
      .execute();
    return data;
  };

  /**
   * 查询语言数量
   */
  static queryMarkCount = (mark: Mark) => {
    const { isUsed } = mark;
    let data = dataSource
      .createQueryBuilder(Mark, 'mark')
      .select('COUNT(*) total');
    if (typeof isUsed === 'boolean') {
      data = data.where('mark.isUsed = :isUsed', { isUsed });
    }
    return data.getRawOne();
  };
}
