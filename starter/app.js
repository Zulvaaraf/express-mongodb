import express from 'express';
import router from './src/routes/route.js';

// POST => (/api/v1/task) - create task
// GET => (/api/v1/tasks) - get all task
// GET => (/api/v1/task:id) - get task with id
// PUT => (/api/v1/tasks/:id) - edit task with id
// DELETE => (/api/v1/tasks/:id)

const app = express();

app.use(express.json());
app.use('/api/v1/tasks', router);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(5000, () => {
  console.log(`express server running on http://localhost:5000`);
});
