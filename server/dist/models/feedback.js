import { DataTypes, Model } from 'sequelize';
export class Feedback extends Model {
}
export function FeedbackFactory(sequelize) {
    Feedback.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        feedbackType: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'user feedback',
        },
        feedback: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        tableName: 'feedbacks',
        sequelize,
    });
    return Feedback;
}
