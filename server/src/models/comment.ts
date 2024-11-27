import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection';
import User from './user';
import UserPost from './user_post';

class Comment extends Model {
  public id!: number;
  public content!: string;
  public post_id!: number;
  public user_id!: number;
  public created_at!: Date;
}

Comment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: UserPost,
        key: 'id',
      },
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
  },
  {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    timestamps: false,
  }
);

<<<<<<< Updated upstream
=======
Comment.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
Comment.belongsTo(UserPost, { as: 'post', foreignKey: 'post_id' });
User.hasMany(Comment, { as: 'comments', foreignKey: 'user_id' });
UserPost.hasMany(Comment, { as: 'comments', foreignKey: 'post_id' });

>>>>>>> Stashed changes
export default Comment;
