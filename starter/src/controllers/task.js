import Task from '../../models/Task.js';
import asyncWrapper from '../middleware/async-wrapper.js';

const postTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    status: 'success',
    task,
  });
});

const getTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({
    status: 'success',
    tasks,
  });
});

const getTaskById = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findById(taskId);

  if (!task) {
    return res.status(404).json({
      status: 'fail',
      message: 'Fail!, id not found!',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

const editTaskById = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const updateResource = req.body;
  const task = await Task.findByIdAndUpdate(taskId, updateResource, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({
      status: 'fail',
      message: 'Fail!, id not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

const updateTaskById = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const updateResource = req.body;

  const task = await Task.findByIdAndUpdate(taskId, updateResource, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({
      status: 'fail',
      message: 'Fail!, id not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

const deleteTaskById = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete(taskId);

  if (!task) {
    return res.status(404).json({
      status: 'fail',
      message: 'Fail!, id not found',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Delete succesfully',
  });
});

export { postTask, getTask, getTaskById, editTaskById, updateTaskById, deleteTaskById };
