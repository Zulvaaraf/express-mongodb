import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/route.js';
import connectDatabase from './src/db/connectDB.js';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api/tasks', router);

app.use(express.static('./src/public'));

const start = async () => {
  try {
    await connectDatabase(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Express server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
