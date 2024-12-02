import UserPost from '../models/user-post.js';
import User from '../models/user.js';
export const getAllPosts = async (_req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getPostById = async (req, res) => {
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
            res.json(posts);
        }
        else {
            res.status(404).json({ message: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createNewPost = async (req, res) => {
    const { title, subheading, content, user_id } = req.body;
    try {
        const newPost = await UserPost.create({ title, subheading, content, user_id });
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, user_id } = req.body;
    try {
        const post = await UserPost.findByPk(id);
        if (post) {
            post.title = title;
            // post.subheading = subheading;
            post.content = content;
            post.user_id = user_id;
            await post.save();
            res.json(post);
        }
        else {
            res.status(404).json({ message: 'Post not found' });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await UserPost.findByPk(id);
        if (post) {
            await post.destroy();
            res.json({ message: 'Post deleted' });
        }
        else {
            res.status(404).json({ message: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
