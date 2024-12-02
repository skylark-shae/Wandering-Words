import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import User from './user.js';

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
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
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


UserPost.belongsTo(User, { as: 'user', foreignKey: 'user_id'});
User.hasMany(UserPost, { as: 'posts', foreignKey: 'user_id'});

export default UserPost;
