import apiRoutes from './api/index.js';
import express from 'express';
import { createPost, getAllPosts, updatePost, deletePost } from '../controllers/blog-controller';

const router = express.Router();

router.post('/posts', createPost);            // Create a new post
router.get('/posts', getAllPosts);            // Get all posts
router.put('/posts/:id', updatePost);         // Update a post by ID
router.delete('/posts/:id', deletePost);      // Delete a post by ID

export default router;