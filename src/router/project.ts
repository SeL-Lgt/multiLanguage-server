import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

router.post(
  '/addProject',
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      res.send('post');
    } catch (err) {
      next(err);
    }
  },
);

const projectRouter = router;

export default projectRouter;
