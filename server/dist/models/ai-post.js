import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import User from './user.js';
class AiPost extends Model {
}
AiPost.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'AiPost',
    tableName: 'ai_posts',
    timestamps: false,
});
AiPost.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
User.hasMany(AiPost, { as: 'ai_posts_user', foreignKey: 'user_id' });
export default AiPost;
