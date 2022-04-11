import express from 'express';
import projectRouter from './project';
import markRouter from './mark';

const router = express.Router();

router.use('/mark', markRouter);
router.use('/project', projectRouter);

router.use('*', (_req, _res, next) => {
  next({ status: 404, message: '请求路径不正确' });
});

export default router;
