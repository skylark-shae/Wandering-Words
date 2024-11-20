import { seedFeedback } from './feedback-seeds.js';
import { seedTips } from './tip-seeds.js';
import { sequelize } from '../models/index.js';
const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');
        await seedFeedback();
        console.log('\n----- FEEDBACK SEEDED -----\n');
        await seedTips();
        console.log('\n----- TIP SEEDED -----\n');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedAll();
