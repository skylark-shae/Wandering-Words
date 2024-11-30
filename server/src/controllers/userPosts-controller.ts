import { Request, Response } from 'express';
import UserPost from '../models/user_post';
import User from '../models/user';





export const getAllPosts = async (_req: Request, res: Response) => {
    try {
        const posts = await UserPost.findAll({
            include: [
            {
                model: User,
                as: 'user',
                attributes: ['username', 'email'],
            },
            ],
        });
        res.json(posts);
        } catch (error: any) {
          res.status(500).json({ message: error.message });
    }
};


export const getPostById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const posts = await UserPost.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['username', 'email'],
                },
            ],
        });
        if (posts) {
            res.json(posts)
        } else {
            res.status(404).json({ message: 'Post not found'})
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


export const createNewPost = async (req: Request, res: Response) => {
    const { title, subheading, content, user_id } = req.body;
    try {
        const newPost = await UserPost.create({ title, subheading, content, user_id });
        res.status(201).json(newPost);
    } catch (error: any) {
        res.status(400).json({ message: error.message });

    }
};


export const updatePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, subheading, content, user_id } = req.body;
    try {
        const post = await UserPost.findByPk(id);
        if (post) {
            post.title = title;
            post.subheading = subheading;
            post.content = content;
            post.user_id = user_id;
            await post.save();
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found'});
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const post = await UserPost.findByPk(id);
        if(post) {
            await post.destroy();
            res.json({ message: 'Post deleted' });
        } else {
            res.status(404).json({ message: 'Post not found'});
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
        

    }
};