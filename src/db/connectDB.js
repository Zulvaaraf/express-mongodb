import mongoose from 'mongoose';

const connectDatabase = (url) => {
  return mongoose.connect(url);
};

export default connectDatabase;
