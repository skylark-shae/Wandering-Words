import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection';

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password_hash!: string;
}

User.init(
  {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  }
);

export default User;
