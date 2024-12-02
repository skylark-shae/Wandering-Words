import { ai_postRouter } from './ai-post-routes.js';
import { commentRouter } from './comment-routes.js';
import { user_postRouter } from './userPosts-routes.js';
import { userRouter } from './user.routes.js';
import { openAiRouter } from './chat-gpt-routes.js';
import { authenticationRouter } from './authentication-routes.js';
import express from 'express';
const router = express.Router();

router.use('/api/ai_posts', ai_postRouter);
router.use('/api/comments', commentRouter);
router.use('/api/user_posts', user_postRouter);
router.use('/api/users', userRouter);
router.use('/api/chat', openAiRouter);
router.use('/api/auth', authenticationRouter);

export default router;
