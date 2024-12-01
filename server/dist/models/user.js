import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
class User extends Model {
}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
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
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
});
export default User;
