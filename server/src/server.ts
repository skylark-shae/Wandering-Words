import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);


  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  }); 
  
// Syncing models with the database

import sequelize from './connection';
import User from './models/user';
import AiPost from './models/ai_post';
import UserPost from './models/user_post';
import Comment from './models/comment';

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    await sequelize.sync({ force: false }); // Set to true for testing (drops tables)
    console.log('Models synchronized.');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();
