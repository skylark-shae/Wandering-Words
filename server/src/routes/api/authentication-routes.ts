import express from 'express';
import { register, login } from '../../controllers/authentication-controller.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register)

export {router as authenticationRouter}