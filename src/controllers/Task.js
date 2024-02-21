import Task from '../models/Task.js';
import asyncWrapper from '../middleware/AsyncWrapper.js';

const postTaskHandler = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    status: 'success',
    task,
  });
});

const getTaskHandler = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({
    status: 'success',
    data: {
      tasks,
    },
  });
});

const getTaskByIdHandler = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findById(taskID);

  if (!task) {
    return res.status(404).json({
      status: 'fail',
      message: 'cannot find task id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

const editTaskByIdHandler = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const editTask = req.body;
  const task = await Task.findByIdAndUpdate(taskID, editTask, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({
      status: 'fail',
      message: 'cannot find task id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

const deleteTaskByIdHandler = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete(taskID);

  if (!task) {
    return res.status(404).json({
      status: 'fail',
      message: 'cannot find task id',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'deleted successfully',
  });
});

export { postTaskHandler, getTaskHandler, getTaskByIdHandler, editTaskByIdHandler, deleteTaskByIdHandler };
