import express from 'express';
import {
    getAllComments,
    getCommentById,
    createNewComment,
    updateComment,
    deleteComment
} from '../../controllers/comment-controller.js';
import auth from '../../middleware/auth.js';

const router = express.Router();


router.get('/', getAllComments);

router.get('/:id', getCommentById);

router.post('/', auth, createNewComment);

router.put('/:id', auth,  updateComment);

router.delete('/:id', auth, deleteComment);

export { router as commentRouter };