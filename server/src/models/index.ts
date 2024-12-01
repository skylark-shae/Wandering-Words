import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
// import { FeedbackFactory } from './feedback.js';
// import { TipFactory } from './tips.js';

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

// const Tip = TipFactory(sequelize);
// const Feedback = FeedbackFactory(sequelize);

export { sequelize };
