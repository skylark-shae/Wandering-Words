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

export default Comment;
