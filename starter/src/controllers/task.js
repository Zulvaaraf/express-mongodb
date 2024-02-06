import Task from '../../models/Task.js';

const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTask = (req, res) => {
  res.json('this is get');
};

const getTaskById = (req, res) => {
  res.json('this is get task by id');
};
const editTaskById = (req, res) => {
  res.json('this is edit task by id');
};

const deleteTaskById = (req, res) => {
  res.json('this is delete task by id');
};

export { postTask, getTask, getTaskById, editTaskById, deleteTaskById };
