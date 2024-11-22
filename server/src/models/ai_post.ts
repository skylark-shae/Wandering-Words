import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection';

class AiPost extends Model {
  public id!: number;
  public title!: string;
  public subheading!: string;
  public content!: string;
  public created_at!: Date;
}

AiPost.init(
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
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'AiPost',
    tableName: 'ai_posts',
    timestamps: false,
  }
);

export default AiPost;
