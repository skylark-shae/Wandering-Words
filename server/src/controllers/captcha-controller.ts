// server/src/controllers/captchaController.ts
import { Request, Response } from 'express';
import axios from 'axios';

// Replace with your reCAPTCHA secret key !!!!!!!!!! IMPORTANT !!!!!!!!!!
// Like really important, LIKE, REALLY REALLY IMPORTANT!!!!!
const SECRET_KEY = 'SECRET_KEY'; 

// Verify reCAPTCHA token
export const verifyCaptcha = async (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, message: 'Token is required.' });
  }

  try {
    const verificationResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: SECRET_KEY,
          response: token,
        },
      }
    );

    const { success } = verificationResponse.data;

    if (success) {
      res.status(200).json({ success: true, message: 'CAPTCHA verified successfully.' });
    } else {
      res.status(400).json({ success: false, message: 'CAPTCHA verification failed.' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};
