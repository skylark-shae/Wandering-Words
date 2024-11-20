import type { Request, Response } from 'express';
import { Tip } from '../models/tips.js';

// Get all tips
export const getAllTips = async (_req: Request, res: Response) => {
  try {
    const tips = await Tip.findAll();
    res.status(200).json(tips);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get tip by ID
export const getTipById = async (req: Request, res: Response) => {
  try {
    const tip = await Tip.findByPk(req.params.id);
    if (tip) {
      res.status(200).json(tip);
    } else {
      res.status(404).json({ error: 'Tip not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create new tip
export const createTip = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newTip = await Tip.create(req.body);
    res.status(201).json(newTip);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update tip by ID
export const updateTip = async (req: Request, res: Response) => {
  try {
    const tip = await Tip.findByPk(req.params.id);
    if (tip) {
      await tip.update(req.body);
      res.status(200).json(tip);
    } else {
      res.status(404).json({ error: 'Tip not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete tip by ID
export const deleteTip = async (req: Request, res: Response) => {
  try {
    const tip = await Tip.findByPk(req.params.id);
    if (tip) {
      await tip.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Tip not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
