import express from 'express';
import SubModulesServices from '@services/SubModulesServices';

const router = express.Router();

router.post('/addSubModules', SubModulesServices.addSubModules);

router.get('/querySubModulesList', SubModulesServices.querySubModulesList);

router.delete('/deleteSubModules', SubModulesServices.deleteSubModules);

const subModulesRouter = router;

export default subModulesRouter;
