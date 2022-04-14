/**
 * 语言类型初始化列表
 */
type LanguageListType = {
  langKey: string;
  langText: string;
};
const languageList: Array<LanguageListType> = [
  {
    langKey: 'af-ZA',
    langText: '南非语',
  },
  {
    langKey: 'ar-AE',
    langText: '阿拉伯语(阿联酋)',
  },
  {
    langKey: 'ar-BH',
    langText: '阿拉伯语(巴林)',
  },
  {
    langKey: 'ar-DZ',
    langText: '阿拉伯语(阿尔及利亚)',
  },
  {
    langKey: 'ar-EG',
    langText: '阿拉伯语(埃及)',
  },
  {
    langKey: 'ar-IQ',
    langText: '阿拉伯语(伊拉克)',
  },
  {
    langKey: 'ar-JO',
    langText: '阿拉伯语(约旦)',
  },
  {
    langKey: 'ar-KW',
    langText: '阿拉伯语(科威特)',
  },
  {
    langKey: 'ar-LB',
    langText: '阿拉伯语(黎巴嫩)',
  },
  {
    langKey: 'ar-LY',
    langText: '阿拉伯语(利比亚)',
  },
  {
    langKey: 'ar-MA',
    langText: '阿拉伯语(摩洛哥)',
  },
  {
    langKey: 'ar-OM',
    langText: '阿拉伯语(阿曼)',
  },
  {
    langKey: 'ar-QA',
    langText: '阿拉伯语(卡塔尔)',
  },
  {
    langKey: 'ar-SA',
    langText: '阿拉伯语(沙特阿拉伯)',
  },
  {
    langKey: 'ar-SY',
    langText: '阿拉伯语(叙利亚)',
  },
  {
    langKey: 'ar-TN',
    langText: '阿拉伯语(突尼斯)',
  },
  {
    langKey: 'ar-YE',
    langText: '阿拉伯语(也门)',
  },
  {
    langKey: 'az-AZ',
    langText: '阿塞拜疆语(拉丁文，西里尔文)',
  },
  {
    langKey: 'be-BY',
    langText: '比利时语',
  },
  {
    langKey: 'bg-BG',
    langText: '保加利亚语',
  },
  {
    langKey: 'bs-BA',
    langText: '波斯尼亚语(拉丁文，波斯尼亚和黑塞哥维那)',
  },
  {
    langKey: 'ca-ES',
    langText: '加泰隆语',
  },
  {
    langKey: 'cs-CZ',
    langText: '捷克语',
  },
  {
    langKey: 'cy-GB',
    langText: '威尔士语',
  },
  {
    langKey: 'da-DK',
    langText: '丹麦语',
  },
  {
    langKey: 'de-AT',
    langText: '德语(奥地利)',
  },
  {
    langKey: 'de-CH',
    langText: '德语(瑞士)',
  },
  {
    langKey: 'de-DE',
    langText: '德语(德国)',
  },
  {
    langKey: 'de-LI',
    langText: '德语(列支敦士登)',
  },
  {
    langKey: 'de-LU',
    langText: '德语(卢森堡)',
  },
  {
    langKey: 'dv-MV',
    langText: '第维埃语',
  },
  {
    langKey: 'el-GR',
    langText: '希腊语',
  },
  {
    langKey: 'en-AU',
    langText: '英语(澳大利亚)',
  },
  {
    langKey: 'en-BZ',
    langText: '英语(伯利兹)',
  },
  {
    langKey: 'en-CA',
    langText: '英语(加拿大)',
  },
  {
    langKey: 'en-CB',
    langText: '英语(加勒比海)',
  },
  {
    langKey: 'en-GB',
    langText: '英语(英国)',
  },
  {
    langKey: 'en-IE',
    langText: '英语(爱尔兰)',
  },
  {
    langKey: 'en-JM',
    langText: '英语(牙买加)',
  },
  {
    langKey: 'en-NZ',
    langText: '英语(新西兰)',
  },
  {
    langKey: 'en-PH',
    langText: '英语(菲律宾)',
  },
  {
    langKey: 'en-TT',
    langText: '英语(特立尼达)',
  },
  {
    langKey: 'en-US',
    langText: '英语(美国)',
  },
  {
    langKey: 'en-ZA',
    langText: '英语(南非)',
  },
  {
    langKey: 'en-ZW',
    langText: '英语(津巴布韦)',
  },
  {
    langKey: 'es-AR',
    langText: '西班牙语(阿根廷)',
  },
  {
    langKey: 'es-BO',
    langText: '西班牙语(玻利维亚)',
  },
  {
    langKey: 'es-CL',
    langText: '西班牙语(智利)',
  },
  {
    langKey: 'es-CO',
    langText: '西班牙语(哥伦比亚)',
  },
  {
    langKey: 'es-CR',
    langText: '西班牙语(哥斯达黎加)',
  },
  {
    langKey: 'es-DO',
    langText: '西班牙语(多米尼加共和国)',
  },
  {
    langKey: 'es-EC',
    langText: '西班牙语(厄瓜多尔)',
  },
  {
    langKey: 'es-ES',
    langText: '西班牙语(国际，传统)',
  },
  {
    langKey: 'es-GT',
    langText: '西班牙语(危地马拉)',
  },
  {
    langKey: 'es-HN',
    langText: '西班牙语(洪都拉斯)',
  },
  {
    langKey: 'es-MX',
    langText: '西班牙语(墨西哥)',
  },
  {
    langKey: 'es-NI',
    langText: '西班牙语(尼加拉瓜)',
  },
  {
    langKey: 'es-PA',
    langText: '西班牙语(巴拿马)',
  },
  {
    langKey: 'es-PE',
    langText: '西班牙语(秘鲁)',
  },
  {
    langKey: 'es-PR',
    langText: '西班牙语(波多黎各(美))',
  },
  {
    langKey: 'es-PY',
    langText: '西班牙语(巴拉圭)',
  },
  {
    langKey: 'es-SV',
    langText: '西班牙语(萨尔瓦多)',
  },
  {
    langKey: 'es-UY',
    langText: '西班牙语(乌拉圭)',
  },
  {
    langKey: 'es-VE',
    langText: '西班牙语(委内瑞拉)',
  },
  {
    langKey: 'et-EE',
    langText: '爱沙尼亚语',
  },
  {
    langKey: 'eu-ES',
    langText: '巴士克语',
  },
  {
    langKey: 'fa-IR',
    langText: '法斯语',
  },
  {
    langKey: 'fi-FI',
    langText: '芬兰语',
  },
  {
    langKey: 'fo-FO',
    langText: '法罗语',
  },
  {
    langKey: 'fr-BE',
    langText: '法语(比利时)',
  },
  {
    langKey: 'fr-CA',
    langText: '法语(加拿大)',
  },
  {
    langKey: 'fr-CH',
    langText: '法语(瑞士)',
  },
  {
    langKey: 'fr-FR',
    langText: '法语(法国)',
  },
  {
    langKey: 'fr-LU',
    langText: '法语(卢森堡)',
  },
  {
    langKey: 'fr-MC',
    langText: '法语(摩纳哥)',
  },
  {
    langKey: 'gl-ES',
    langText: '加里西亚语',
  },
  {
    langKey: 'gu-IN',
    langText: '古吉拉特语',
  },
  {
    langKey: 'he-IL',
    langText: '希伯来语',
  },
  {
    langKey: 'hi-IN',
    langText: '印地语',
  },
  {
    langKey: 'hr-BA',
    langText: '克罗地亚语(波斯尼亚和黑塞哥维那)',
  },
  {
    langKey: 'hr-HR',
    langText: '克罗地亚语',
  },
  {
    langKey: 'hu-HU',
    langText: '匈牙利语',
  },
  {
    langKey: 'hy-AM',
    langText: '亚美尼亚语',
  },
  {
    langKey: 'id-ID',
    langText: '印度尼西亚语',
  },
  {
    langKey: 'is-IS',
    langText: '冰岛语',
  },
  {
    langKey: 'it-CH',
    langText: '意大利语(瑞士)',
  },
  {
    langKey: 'it-IT',
    langText: '意大利语(意大利)',
  },
  {
    langKey: 'ja-JP',
    langText: '日语',
  },
  {
    langKey: 'ka-GE',
    langText: '格鲁吉亚语',
  },
  {
    langKey: 'kk-KZ',
    langText: '哈萨克语',
  },
  {
    langKey: 'kn-IN',
    langText: '卡纳拉语',
  },
  {
    langKey: 'ko-KR',
    langText: '朝鲜语',
  },
  {
    langKey: 'kok-IN',
    langText: '孔卡尼语',
  },
  {
    langKey: 'ky-KG',
    langText: '吉尔吉斯语(西里尔文)',
  },
  {
    langKey: 'lt-LT',
    langText: '立陶宛语',
  },
  {
    langKey: 'lv-LV',
    langText: '拉脱维亚语',
  },
  {
    langKey: 'mi-NZ',
    langText: '毛利语',
  },
  {
    langKey: 'mk-MK',
    langText: '马其顿语(FYROM)',
  },
  {
    langKey: 'mn-MN',
    langText: '蒙古语(西里尔文)',
  },
  {
    langKey: 'mr-IN',
    langText: '马拉地语',
  },
  {
    langKey: 'ms-BN',
    langText: '马来语(文莱达鲁萨兰)',
  },
  {
    langKey: 'ms-MY',
    langText: '马来语(马来西亚)',
  },
  {
    langKey: 'mt-MT',
    langText: '马耳他语',
  },
  {
    langKey: 'nb-NO',
    langText: '挪威语(伯克梅尔)(挪威)',
  },
  {
    langKey: 'nl-BE',
    langText: '荷兰语(比利时)',
  },
  {
    langKey: 'nl-NL',
    langText: '荷兰语(荷兰)',
  },
  {
    langKey: 'nn-NO',
    langText: '挪威语(尼诺斯克)(挪威)',
  },
  {
    langKey: 'ns-ZA',
    langText: '北梭托语',
  },
  {
    langKey: 'pa-IN',
    langText: '旁遮普语',
  },
  {
    langKey: 'pl-PL',
    langText: '波兰语',
  },
  {
    langKey: 'pt-BR',
    langText: '葡萄牙语(巴西)',
  },
  {
    langKey: 'pt-PT',
    langText: '葡萄牙语(葡萄牙)',
  },
  {
    langKey: 'qu-BO',
    langText: '克丘亚语(玻利维亚)',
  },
  {
    langKey: 'qu-EC',
    langText: '克丘亚语(厄瓜多尔)',
  },
  {
    langKey: 'qu-PE',
    langText: '克丘亚语(秘鲁)',
  },
  {
    langKey: 'ro-RO',
    langText: '罗马尼亚语',
  },
  {
    langKey: 'ru-RU',
    langText: '俄语',
  },
  {
    langKey: 'sa-IN',
    langText: '梵文',
  },
  {
    langKey: 'se-FI',
    langText: '北萨摩斯语(芬兰)，斯科特萨摩斯语(芬兰)，伊那里萨摩斯语(芬兰)',
  },
  {
    langKey: 'se-NO',
    langText: '北萨摩斯语(挪威)，律勒欧萨摩斯语(挪威)，南萨摩斯语(挪威)',
  },
  {
    langKey: 'se-SE',
    langText: '北萨摩斯语(瑞典)，律勒欧萨摩斯语(瑞典)，南萨摩斯语(瑞典)',
  },
  {
    langKey: 'sk-SK',
    langText: '斯洛伐克语',
  },
  {
    langKey: 'sl-SI',
    langText: '斯洛文尼亚语',
  },
  {
    langKey: 'sq-AL',
    langText: '阿尔巴尼亚语',
  },
  {
    langKey: 'sr-BA',
    langText: '塞尔维亚语(拉丁文，西里尔文，波斯尼亚和黑塞哥维那)',
  },
  {
    langKey: 'sr-SP',
    langText: '塞尔维亚(拉丁，西里尔文)',
  },
  {
    langKey: 'sv-FI',
    langText: '瑞典语(芬兰)',
  },
  {
    langKey: 'sv-SE',
    langText: '瑞典语',
  },
  {
    langKey: 'sw-KE',
    langText: '斯瓦希里语',
  },
  {
    langKey: 'syr-SY',
    langText: '叙利亚语',
  },
  {
    langKey: 'ta-IN',
    langText: '泰米尔语',
  },
  {
    langKey: 'te-IN',
    langText: '泰卢固语',
  },
  {
    langKey: 'th-TH',
    langText: '泰语',
  },
  {
    langKey: 'tl-PH',
    langText: '塔加路语(菲律宾)',
  },
  {
    langKey: 'tn-ZA',
    langText: '茨瓦纳语',
  },
  {
    langKey: 'tr-TR',
    langText: '土耳其语',
  },
  {
    langKey: 'tt-RU',
    langText: '鞑靼语',
  },
  {
    langKey: 'uk-UA',
    langText: '乌克兰语',
  },
  {
    langKey: 'ur-PK',
    langText: '乌都语',
  },
  {
    langKey: 'uz-UZ',
    langText: '乌兹别克语(拉丁文，西里尔文)',
  },
  {
    langKey: 'vi-VN',
    langText: '越南语',
  },
  {
    langKey: 'xh-ZA',
    langText: '班图语',
  },
  {
    langKey: 'zh-CN',
    langText: '中文(简体)',
  },
  {
    langKey: 'zh-HK',
    langText: '中文(香港)',
  },
  {
    langKey: 'zh-MO',
    langText: '中文(澳门)',
  },
  {
    langKey: 'zh-SG',
    langText: '中文(新加坡)',
  },
  {
    langKey: 'zh-TW',
    langText: '中文(繁体)',
  },
  {
    langKey: 'zu-ZA',
    langText: '祖鲁语',
  },
];

export default languageList;
