import express from 'express';
import router from './src/routes/route.js';
import dotenv from 'dotenv';
import connectDB from './src/db/connect.js';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.static('./src/public'));

app.use(express.json());

app.use('/api/v1/tasks', router);

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
