import { Tip } from '../models/tips.js';

export const seedTips = async () => {
  await Tip.bulkCreate([
    { 
      username: 'JJ', 
      topic: 'UX', 
      tip: "Don't use Papyrus" 
    },
    { 
      username: 'Sarah', 
      topic: 'UX', 
      tip: "Use alt tags to improve accessibility" 
    },
  ]);
};
