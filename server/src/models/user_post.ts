import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection';
import User from './user';

class UserPost extends Model {
  public id!: number;
  public title!: string;
  public subheading!: string;
  public content!: string;
  public user_id!: number;
  public created_at!: Date;
}

UserPost.init(
  {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    subheading: {
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
  },
  {
    sequelize,
    modelName: 'UserPost',
    tableName: 'user_posts',
    timestamps: false,
  }
);

export default UserPost;
