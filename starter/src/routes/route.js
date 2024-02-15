import express from 'express';
import { postTask, getTask, getTaskById, editTaskById, deleteTaskById, updateTaskById } from '../controllers/task.js';

const router = express.Router();

router.post('/', postTask);

router.get('/', getTask);

router.get('/:id', getTaskById);

router.put('/:id', editTaskById);

router.patch('/:id', updateTaskById);

router.delete('/:id', deleteTaskById);

export default router;
