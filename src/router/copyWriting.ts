import express from 'express';
import CopyWritingServices from '@services/CopyWritingServices';
import multer from 'multer';

const router = express();
const upload = multer();

router.post('/addCopyWriting', CopyWritingServices.addCopyWriting);
router.get('/queryCopyWriting', CopyWritingServices.queryCopyWriting);
router.get(
  '/queryCopyWritingByCopyKey',
  CopyWritingServices.queryCopyWritingByCopyKey,
);
router.delete('/deleteCopyWriting', CopyWritingServices.deleteCopyWriting);
router.put('/updateCopyWriting', CopyWritingServices.updateCopyWriting);
router.post(
  '/uploadCopyWriting',
  upload.single('file'),
  CopyWritingServices.uploadCopy,
);
router.post('/downloadCopyWriting', CopyWritingServices.downLoadCopyWriter);

const copyWritingRouter = router;

export default copyWritingRouter;
