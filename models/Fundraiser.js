import mongoose from "mongoose";
const Schema = mongoose.Schema;

const fundraiserSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageLink: { type: String },
  fundraiserDate: { type: Date, required: true },
});

export default mongoose.models.Fundraiser || mongoose.model('Fundraiser', fundraiserSchema);