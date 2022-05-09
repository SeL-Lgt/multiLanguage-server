import express from 'express';
import MarkServices from '@services/MarkServices';

const router = express.Router();

/**
 * 语言标识列表初始化
 */
router.get('/langMarkInit', MarkServices.langMarkInit);

/**
 * 查询语言标识列表
 */
router.get('/queryMarkList', MarkServices.queryMarkList);

/**
 * 添加语言标识
 */
router.post('/addMark', MarkServices.addMark);

/**
 * 修改语言标识信息
 */
router.put('/updateMark', MarkServices.updateMark);

const markRouter = router;

export default markRouter;
