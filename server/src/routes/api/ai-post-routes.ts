import express from 'express';
import {
    getAllAiPosts,
    getAiPostById,
    createNewAiPost,
    updateAiPost,
    deleteAiPost
} from '../../controllers/ai_post-controller.js';
import auth from '../../middleware/auth.js';

const router = express.Router();


router.get('/', getAllAiPosts);

router.get('/:id', getAiPostById);

router.post('/', auth, createNewAiPost);

router.put('/:id', auth, updateAiPost);

router.delete('/:id', auth,  deleteAiPost);

export { router as ai_postRouter };