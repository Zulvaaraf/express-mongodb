import express from 'express';
import router from './src/routes/route.js';
import dotenv from 'dotenv';
import connectDB from './src/db/connect.js';

dotenv.config();

// POST => (/api/v1/task) - create task
// GET => (/api/v1/tasks) - get all task
// GET => (/api/v1/task:id) - get task with id
// PUT => (/api/v1/tasks/:id) - edit task with id
// DELETE => (/api/v1/tasks/:id)

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api/v1/tasks', router);

app.get('/', (req, res) => {
  res.send('hello world');
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Express server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
