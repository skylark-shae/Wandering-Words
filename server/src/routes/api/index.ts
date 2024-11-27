import { ai_postRouter } from './ai_post-routes.js';
import { commentRouter } from './comment-routes.js';
import { user_postRouter } from './userPosts-routes.js';
import { userRouter } from './user.routes.js';
import express from 'express';
const router = express.Router();

router.use('/ai_posts', ai_postRouter);
router.use('/comments', commentRouter);
router.use('/user_posts', user_postRouter);
router.use('/users', userRouter);

export default router;
