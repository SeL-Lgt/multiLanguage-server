import express from 'express';
import ModulesServices from '@services/ModulesServices';

const router = express.Router();

/**
 * 新增父模块信息
 */
router.post('/addMoules', ModulesServices.addModules);

/**
 * 查询所有模块列表
 */
router.get('/queryModulesList', ModulesServices.queryModulesList);

/**
 * 更新父模块内容
 */
router.post('/updateModules', ModulesServices.updateModules);

/**
 * 查询所有模块名字
 */
router.get('/queryModulesNameList', ModulesServices.queryModulesNameList);

const modulesRouter = router;

export default modulesRouter;
