// api/auth/change-password.js
import dbConnect from "@/lib/db";
import { getServerSession } from "next-auth/next";
import User from "@/models/User";
import { hashPassword, verifyPassword } from "@/lib/auth";

const handler = async (req, res) => {

  const session = await getServerSession(req, res);

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();

  const { oldPassword, newPassword } = req.body;

  const user = await User.findOne({ username: session.user.name });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isValid = await verifyPassword(oldPassword, user.password);

  if (!isValid) {
    return res.status(401).json({ message: "Invalid old password" });
  }

  const hashedNewPassword = await hashPassword(newPassword);

  user.password = hashedNewPassword;
  await user.save();

  return res.status(200).json({ message: "Password changed successfully" });
}

export default handler;