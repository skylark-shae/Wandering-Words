import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import User from './user.js';
import UserPost from './user-post.js';
class Comment extends Model {
}
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user_posts',
            key: 'id',
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
});
Comment.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
Comment.belongsTo(UserPost, { as: 'post', foreignKey: 'post_id' });
User.hasMany(Comment, { as: 'comments', foreignKey: 'user_id' });
UserPost.hasMany(Comment, { as: 'comments', foreignKey: 'post_id' });
export default Comment;
