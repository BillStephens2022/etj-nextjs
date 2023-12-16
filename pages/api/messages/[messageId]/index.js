
//  /api/messages/[messageId]
// route used for Deleting a specific Message
import { getServerSession } from "next-auth/next";
import dbConnect from "@/lib/db";
import Message from "@/models/Message";

const handler = async (req, res) => {
 
  await dbConnect();
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  const { messageId } = req.query;

  // Delete a specific message
  if (req.method === "DELETE") {
    const session = await getServerSession(req, res);
    if (!session) {
      res.status(401).json({ message: "Not Authenticated to Delete a Message!" });
      return;
    }

    try {
      const existingMessage = await Message.findById(messageId);

      if (!existingMessage) {
        return res.status(404).json({ error: "Message not found" });
      }

      // delete the message
      await existingMessage.deleteOne();
      res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
      console.error("Error deleting message:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

export default handler;