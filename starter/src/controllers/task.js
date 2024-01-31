const postTask = (req, res) => {
  res.json('this is post');
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
