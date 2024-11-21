import express from 'express';
import { getAllFeedback, getFeedbackById, createFeedback, updateFeedback, deleteFeedback, } from '../../controllers/feedback-controller.js';
const router = express.Router();
// GET /feedback - Get all feedback
router.get('/', getAllFeedback);
// GET /feedback/:id - Get feedback by ID
router.get('/:id', getFeedbackById);
// POST /feedback - Create new feedback
router.post('/', createFeedback);
// PUT /feedback/:id - Update feedback by ID
router.put('/:id', updateFeedback);
// DELETE /feedback/:id - Delete feedback by ID
router.delete('/:id', deleteFeedback);
export { router as feedbackRouter };
