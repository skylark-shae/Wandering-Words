import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../connection';

export default class AiPost extends Model {
  public id!: number;
  public post_id!: number;
  public user_id!: string;
}

AiPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: UserPost,
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'AiPost',
    tableName: 'ai_posts',
  }
);
