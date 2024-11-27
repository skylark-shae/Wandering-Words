import express from 'express';
import {
    getAllPosts,
    getPostById,
    createNewPost,
    updatePost,
    deletePost
} from '../../controllers/userPosts-controller';

const router = express.Router();


router.get('/', getAllPosts);

router.get('/:id', getPostById);

router.post('/', createNewPost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);

export { router as user_postRouter };