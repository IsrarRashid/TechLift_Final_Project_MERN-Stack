import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    activityType: {
      type: String,
    },
    duration: {
      type: Number,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("tasks", productSchema);
