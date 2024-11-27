import express from 'express';
import {
    getAllComments,
    getCommentById,
    createNewComment,
    updateComment,
    deleteComment
} from '../../controllers/comment-controller.js';

const router = express.Router();


router.get('/', getAllComments);

router.get('/:id', getCommentById);

router.post('/', createNewComment);

router.put('/:id', updateComment);

router.delete('/:id', deleteComment);

export { router as commentRouter };