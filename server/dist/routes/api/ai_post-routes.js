import express from 'express';
import { getAllAiPosts, getAiPostById, createNewAiPost, updateAiPost, deleteAiPost } from '../../controllers/ai_post-controller.js';
const router = express.Router();
router.get('/', getAllAiPosts);
router.get('/:id', getAiPostById);
router.post('/', createNewAiPost);
router.put('/:id', updateAiPost);
router.delete('/:id', deleteAiPost);
export { router as ai_postRouter };
