# multiLanguage-server

多语言管理平台后端，以 Express 框架的 Node 后端系统

> 在线地址
> http://lisay.top/multiLanguage-client
>
> 技术栈：Node、Express、TypeScript
>
> node 版本：14.19.1
>
> npm 版本：6.14.16

## 运行

> \# 安装依赖
>
> npm install
>
> \# 本地开发运行
>
> npm run start
>
> \# 生产环境
>
> npm run start:prod

## 项目打包

> npm run build
>
> \# linux 环境二进制文件
>
> npm run pkg
>
> \# windows 环境 exe 执行文件
>
> npm run pkg:win

## 目录结构

```
├── commitlint.config.js                                            // commit提交校验配置文件
├── envs                                                            // 环境变量文件夹
├── package.json                                                    // 项目依赖
├── README.md                                                       // 说明文档
├── src                                                             // 源码目录
│   ├── app.ts                                                      // 程序入口文件
│   ├── dao                                                         // dao层-数据库请求方法
│   │   ├── CopyWritingDao.ts
│   │   ├── MarkDao.ts
│   │   ├── ModulesDao.ts
│   │   └── SubModulesDao.ts
│   ├── entity                                                      // 实体类
│   │   ├── Base.ts
│   │   ├── CopyWriting.ts
│   │   ├── Mark.ts
│   │   ├── Modules.ts
│   │   └── SubModules.ts
│   ├── exceptions                                                  // 请求异常实体类
│   │   └── HttpException.ts
│   ├── middleware                                                  // 中间件
│   │   └── error-handler.ts
│   ├── router                                                      // controller层请求路由
│   │   ├── copyWriting.ts
│   │   ├── index.ts
│   │   ├── mark.ts
│   │   ├── modules.ts
│   │   └── subModules.ts
│   ├── services                                                    // 事务处理
│   │   ├── CopyWritingServices.ts
│   │   ├── MarkServices.ts
│   │   ├── ModulesServices.ts
│   │   └── SubModulesServices.ts
│   ├── type                                                        // ts类型声明
│   │   └── CopyWritingServices.d.ts
│   └── util                                                        // 工具类
│       ├── app-data-source.ts                                      // typeORM数据库配置文件
│       ├── dataConversionTree.ts                                   // 扁平数据结构转树形结构
│       ├── importExcelFromBuffer.ts                                // xlsx插件方法封装
│       ├── langInitList.ts                                         // 初始化录入语言偏好
│       └── paginationUtil.ts                                       // 分页工具
└── tsconfig.json                                                   // ts配置文件
```
