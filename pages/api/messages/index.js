import Message from "@/models/Message";
import dbConnect from "@/lib/db";

const handler = async (req, res) => {
  await dbConnect();
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  // Add a new Fundraiser
  if (req.method === "POST") {

    const { name, messageText } = req.body;

    try {
      const newMessage = new Message({
        name,
        messageText,
        date: new Date(),
      });
      console.log(newMessage);

      await newMessage.save();
      res.status(201).json({ message: "Message added successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "GET") {
    try {
      const messages = await Message.find({});
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
