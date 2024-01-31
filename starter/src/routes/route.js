import express from 'express';
import { postTask, getTask, getTaskById, editTaskById, deleteTaskById } from '../controllers/task.js';

const router = express.Router();

router.post('/', postTask);

router.get('/', getTask);

router.get('/:id', getTaskById);

router.put('/:id', editTaskById);

router.delete('/:id', deleteTaskById);

export default router;
