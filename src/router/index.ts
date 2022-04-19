import express from 'express';
import markRouter from '@router/mark';
import moduleRouter from '@router/modules';
import subModulesRouter from '@router/subModules';

const router = express.Router();

router.use('/mark', markRouter);
router.use('/module', moduleRouter);
router.use('/subModule', subModulesRouter);

router.use('*', (_req, _res, next) => {
  next({ status: 404, message: '请求路径不正确' });
});

export default router;
