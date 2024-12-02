import express from 'express';
import auth from '../../middleware/auth.js';
import { uselessFact } from '../../controllers/useless-facts-controller.js';

const router = express.Router();
router.get('/', auth, uselessFact);

export {router as uselessfactsRouter};
