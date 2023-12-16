//handler for fetching User data  /api/users

import User from "@/models/User";
import dbConnect from "@/lib/db";

const handler = async (req, res) => {
  await dbConnect();
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  // fetch users
if (req.method === "GET") {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;