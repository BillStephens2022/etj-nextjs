import mongoose from "mongoose";
const Schema = mongoose.Schema;


const messageSchema = new Schema({
  name: { type: String, required: true },
  messageText: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.models.Message || mongoose.model('Message', messageSchema);