import express from "express";
import {
    getAllPosts,
    getPostById,
    createNewPost,
    updatePost,
    deletePost
} from '../../controllers/user-posts-controller.js';
import auth from '../../middleware/auth.js'

const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.post("/", auth, createNewPost);

router.post('/', auth, createNewPost);

router.put('/:id', auth, updatePost);

router.delete('/:id', auth, deletePost);

export { router as user_postRouter };
