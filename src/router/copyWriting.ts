import express from 'express';
import CopyWritingServices from '@services/CopyWritingServices';

const router = express();

router.post('/addCopyWriting', CopyWritingServices.addCopyWriting);
router.get('/queryCopyWriting', CopyWritingServices.queryCopyWriting);
router.get(
  '/queryCopyWritingByCopyKey',
  CopyWritingServices.queryCopyWritingByCopyKey,
);
router.delete('/deleteCopyWriting', CopyWritingServices.deleteCopyWriting);
router.put('/updateCopyWriting', CopyWritingServices.updateCopyWriting);

const copyWritingRouter = router;

export default copyWritingRouter;
