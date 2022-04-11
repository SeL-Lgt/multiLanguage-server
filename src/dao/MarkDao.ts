import dataSource from '@/util/app-data-source';
import Mark from '@/entity/Mark';
import langInitList from '@/util/langInitList';

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
   * @param {boolean|undefined} isUsed 标识是否使用
   * @return {Array<Mark>} 语言标识列表
   */
  static queryMarkList = (isUsed?: boolean) => {
    let data;
    data = dataSource.createQueryBuilder(Mark, 'mark');
    if (isUsed !== undefined) {
      data = data.where('mark.isUsed = :isUsed', { isUsed });
    }
    return data.getMany();
  };

  /**
   * 新增语言标识
   * 将语言标识使用状态更改为 已使用
   * @param mark
   */
  static addMark = (mark: Mark) => {
    const { id, remark } = mark;
    const data = dataSource
      .createQueryBuilder()
      .update(Mark)
      .set({
        isUsed: true,
        remark,
        updateUser: 'admin',
      })
      .where('id = :id', { id })
      .execute();
    return data;
  };

  /**
   * 修改语言标识信息
   * @param mark
   */
  static updateMark = (mark: Mark) => {
    const { id, remark } = mark;
    const data = dataSource
      .createQueryBuilder()
      .update(Mark)
      .set({
        remark,
        updateUser: 'admin',
      })
      .where('id = :id', { id })
      .execute();
    return data;
  };
}
