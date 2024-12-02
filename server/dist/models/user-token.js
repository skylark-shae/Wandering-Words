import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import User from './user.js';
class UserToken extends Model {
}
UserToken.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    token: {
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
    modelName: 'UserToken',
    tableName: 'user_tokens',
    timestamps: false,
});
UserToken.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
User.hasMany(UserToken, { as: 'tokens', foreignKey: 'user_id' });
export default UserToken;
