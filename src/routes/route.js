import express from 'express';
import { postTaskHandler, getTaskHandler, getTaskByIdHandler, editTaskByIdHandler, deleteTaskByIdHandler } from '../controllers/Task.js';

const router = express.Router();

router.post('/', postTaskHandler);
router.get('/', getTaskHandler);
router.get('/:id', getTaskByIdHandler);
router.put('/:id', editTaskByIdHandler);
router.delete('/:id', deleteTaskByIdHandler);

export default router;
