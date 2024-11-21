import { DataTypes, Model } from 'sequelize';
export class Tip extends Model {
}
export function TipFactory(sequelize) {
    Tip.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        topic: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'UX',
        },
        tip: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        tableName: 'tips',
        sequelize,
    });
    return Tip;
}
