import express from 'express';
import { getAllTips, getTipById, createTip, updateTip, deleteTip, } from '../../controllers/tip-controller.js';
const router = express.Router();
// GET /tips - Get all tips
router.get('/', getAllTips);
// GET /tips/:id - Get tip by ID
router.get('/:id', getTipById);
// POST /tips - Create new tip
router.post('/', createTip);
// PUT /tips/:id - Update tip by ID
router.put('/:id', updateTip);
// DELETE /tips/:id - Delete tip by ID
router.delete('/:id', deleteTip);
export { router as tipRouter };
