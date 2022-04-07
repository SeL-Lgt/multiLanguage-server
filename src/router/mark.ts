import express from 'express';
import MarkServices from '../services/MarkServices';

const router = express.Router();

/**
 * 语言标识列表初始化
 */
router.post('/langMarkInit', MarkServices.langMarkInit);

const markRouter = router;

export default markRouter;
