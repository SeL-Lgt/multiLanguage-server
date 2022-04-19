import express from 'express';
import SubModulesServices from '@services/SubModulesServices';

const router = express.Router();

/**
 * 新增子模块
 */
router.post('/addSubModules', SubModulesServices.addSubModules);

/**
 * 查询子模块列表
 */
router.get('/querySubModulesList', SubModulesServices.querySubModulesList);

/**
 * 删除子模块
 */
router.delete('/deleteSubModules', SubModulesServices.deleteSubModules);

const subModulesRouter = router;

export default subModulesRouter;
