import express from 'express';
import { register, login, logout, getNewAccessToken } from '../../controllers/authentication-controller.js';
const router = express.Router();
router.post('/login', login);
router.post('/register', register);
router.post('/refreshToken', getNewAccessToken);
router.delete('/refreshToken', logout);
export { router as authenticationRouter };
