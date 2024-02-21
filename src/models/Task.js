import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxLength: [20, 'name cannot be more than 20 character'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Task', TaskSchema);
