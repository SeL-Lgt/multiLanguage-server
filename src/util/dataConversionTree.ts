type obj = {
  [key: string]: string | obj;
};
export default function dataToTree(data: object) {
  if (!data) {
    return null;
  }

  const hashMap: obj = {};
  Object.entries(data).forEach(([key, value]) => {
    let tempMap = hashMap;
    const keyArr = key.split('.');
    while (keyArr.length > 1) {
      const curKey = keyArr.shift() as string;
      if (!tempMap[curKey]) {
        tempMap[curKey] = {};
      } else if (typeof tempMap[curKey] === 'string') {
        tempMap[curKey] = {
          [tempMap[curKey] as string]: tempMap[curKey],
        };
      }
      tempMap = tempMap[curKey] as obj;
    }

    tempMap[keyArr[0]] = value;
  });

  return hashMap;
}
