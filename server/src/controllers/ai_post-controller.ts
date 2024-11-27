import { Request, Response } from 'express';
import AiPost from '../models/ai_post';


export const getAllAiPosts = async (_req: Request, res: Response) => {
    try {
        const posts = await AiPost.findAll();
        res.json(posts);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


export const getAiPostById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const post = await AiPost.findByPk(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.json(post);
    } catch (error: any) {
        return res.status(500).json({ message: error.message});
    }
};


export const createNewAiPost = async (req: Request, res: Response) => {
    try {
        const { title, subheading, content } = req.body;

        const newPost = await AiPost.create({ title, subheading, content });

        res.status(201).json(newPost);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
};


export const updateAiPost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, subheading, content } = req.body;
    try {
        const [updated] = await AiPost.update(
            { title, subheading, content },
            { where: { id } }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const updatedPost = await AiPost.findByPk(id);
        return res.json(updatedPost);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};


export const deleteAiPost = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        const deleted = await AiPost.destroy({ where: { id } });

        if (!deleted) {
            return res.status(404).json({ message: 'Post not found' });
        }

        return res.json({ message: 'Post deleted successfully' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};