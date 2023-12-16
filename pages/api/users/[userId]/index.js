
//  /api/users/[userId]
// route used for Deleting a specific User
import { getServerSession } from "next-auth/next";
import dbConnect from "@/lib/db";
import User from "@/models/User";

const handler = async (req, res) => {
 
  await dbConnect();
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  const { userId } = req.query;

  // Delete a specific user
  if (req.method === "DELETE") {
    const session = await getServerSession(req, res);
    if (!session) {
      res.status(401).json({ message: "Not Authenticated to Delete a User!" });
      return;
    }

    try {
      const existingUser = await User.findById(userId);

      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }

      // delete the user
      await existingUser.deleteOne();
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

export default handler;