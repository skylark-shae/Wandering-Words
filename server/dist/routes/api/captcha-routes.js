// server/src/routes/captchaRoutes.ts
import express from 'express';
import { verifyCaptcha } from '../../controllers/captcha-controller'; // Ensure path points to your controller
const router = express.Router();
// Define the POST route for CAPTCHA verification
router.post('/verify-captcha', verifyCaptcha);
export default router;
