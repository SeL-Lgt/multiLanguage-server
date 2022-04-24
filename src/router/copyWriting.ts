import express from 'express';
import CopyWritingServices from '@services/CopyWritingServices';

const router = express();

router.post('/addCopyWriting', CopyWritingServices.addCopyWriting);
router.get('/queryCopyWriting', CopyWritingServices.queryCopyWriting);

const copyWritingRouter = router;

export default copyWritingRouter;
