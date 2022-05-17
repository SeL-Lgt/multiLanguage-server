type obj = {
  [key: string]: string | obj;
};
export default function dataToTree(data: object) {
  if (!data) {
    return null;
  }

  const hashMap: obj = {};
  // 用于存储 不合理JSON结构，无法转换tree层级 的key值
  const errorMap: obj = {};
  Object.entries(data).forEach(([key, value]) => {
    let tempMap = hashMap;
    const keyArr = key.split('.');
    while (keyArr.length > 1) {
      const curKey = keyArr.shift() as string;
      if (!tempMap[curKey]) {
        tempMap[curKey] = {};
      } else if (typeof tempMap[curKey] === 'string') {
        // 判断该层级的值是否为字符串
        // 将该层级变为空，并将原数据存进错误文案中
        const lastIndex = key.lastIndexOf('.');
        const preKey = key.slice(0, lastIndex);
        errorMap[preKey] = tempMap[curKey];
        tempMap[curKey] = {};
        // const lastIndex = key.lastIndexOf('.');
        // throw new Error(
        //   `${key.slice(
        //     0,
        //     lastIndex,
        //   )}同时为对象和字符串，为不合理JSON结构，无法转换tree层级，请修改相关key值`,
        // );
      }
      tempMap = tempMap[curKey] as obj;
    }
    tempMap[keyArr[0]] = value;
  });

  return { ...hashMap, ...errorMap };
}
