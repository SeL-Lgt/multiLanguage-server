import xlsx from 'xlsx';

/**
 * 上传excel文件
 * @param fileBuffer
 */
export default function importExcelFromBuffer(fileBuffer: Buffer) {
  // 获取 workbook
  const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
  // 获取第一张表名
  const firstSheetName = workbook.SheetNames[0];
  // 获取第一张表
  const firstSheet = workbook.Sheets[firstSheetName];
  // 获取数据
  return xlsx.utils.sheet_to_json(firstSheet);
}

/**
 * 转换 key
 * @param excelData
 * @param keysMap
 */
export function convertKeys<Raw = any, Target = any>(
  excelData: Raw[],
  keysMap: Record<string, string>,
): Target[] {
  return excelData.map((excelItem) =>
    Object.entries(excelItem).reduce((_prev: any, curt) => {
      const prev = _prev;
      const [curtKey, curtValue] = curt;
      // 更新 key
      const mappedKey = keysMap[curtKey];
      if (mappedKey) {
        prev[mappedKey] = curtValue;
      } else {
        prev[curtKey] = curtValue;
      }
      return prev;
    }, {}),
  );
}

/**
 * 将数据转成 excel
 * @param array
 * @param sheetName
 * @returns {any}
 */
export function exportExcelFromData<T>(array: Array<T>, sheetName = '表1') {
  const jsonWorkSheet = xlsx.utils.json_to_sheet<T>(array);
  const workBook = {
    SheetNames: [sheetName],
    Sheets: {
      [sheetName]: jsonWorkSheet,
    },
  };
  return xlsx.write(workBook, { type: 'binary' });
}
