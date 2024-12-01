import { Request, Response } from 'express';
import UserPost from '../models/user-post';

// Create a new blog post
export const createPost = async (req: Request, res: Response) => {
  const { title, content, user_id } = req.body;
  try {
    const post = await UserPost.create({ title, content, user_id });
    res.status(201).json(post);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch all blog posts
export const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await UserPost.findAll();
    res.json(posts);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing blog post
export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const post = await UserPost.findByPk(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.title = title || post.title;
    post.content = content || post.content;

    await post.save();

    return res.status(200).json(post);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

// Delete an existing blog post
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const post = await UserPost.findByPk(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await post.destroy();

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};