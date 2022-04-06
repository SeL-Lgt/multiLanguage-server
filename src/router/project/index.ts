import express from 'express';

const router = express.Router();

router.post('/addProject', async (_req, res, next) => {
  try {
    res.send('post');
  } catch (err) {
    next(err);
  }
});

export default router;
