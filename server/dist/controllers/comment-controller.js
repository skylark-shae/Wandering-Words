import Comment from '../models/comment.js';
import User from '../models/user.js';
import UserPost from '../models/user-post.js';
export const getAllComments = async (_req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['username'],
                },
                {
                    model: UserPost,
                    as: 'post',
                    attributes: ['title'],
                },
            ],
        });
        res.json(comments);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getCommentById = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['username'],
                },
                {
                    model: UserPost,
                    as: 'post',
                    attributes: ['title'],
                },
            ],
        });
        if (!comment) {
            res.status(404).json({ message: 'Comment not found' });
        }
        else {
            res.json(comment);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createNewComment = async (req, res) => {
    try {
        const { content, post_id, user_id } = req.body;
        const newComment = await Comment.create({
            content,
            post_id,
            user_id,
        });
        res.status(201).json(newComment);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateComment = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
        const [updated] = await Comment.update({ content }, { where: { id } });
        if (!updated) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        const updatedComment = await Comment.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['username'],
                },
                {
                    model: UserPost,
                    as: 'post',
                    attributes: ['title'],
                },
            ],
        });
        return res.json(updatedComment);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const deleteComment = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Comment.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        return res.json({ message: 'Comment deleted successfully' });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
