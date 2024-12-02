import type { Request, Response } from 'express';
import uselessfactsService from '../services/uselessfacts.service.js';

// post request to /api/chat
export const uselessFact = async (_req: Request, res: Response) => {

  try {
    const uselessFact = await uselessfactsService.getUselessFact();
    await res.json(uselessFact);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};