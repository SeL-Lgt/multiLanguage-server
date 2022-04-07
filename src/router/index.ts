import express from 'express';
import projectRouter from './project';
import markRouter from './mark';

const router = express.Router();

router.use('/mark', markRouter);
router.use('/project', projectRouter);

export default router;
