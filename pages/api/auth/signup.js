import { hashPassword } from "@/lib/auth";
import dbConnect from "@/lib/db";
import User from "@/models/User";

dbConnect();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { username, password } = data;
    if (!username || !password || password.trim().length < 7) {
      res.status(422).json({
        message:
          "Invalid input - password should be at least 7 characters long.",
      });
      return;
    }

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ username }, {}, { new: true });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists." });
      }

      const hashedPassword = await hashPassword(password);

      // Create a new user instance using the User model
      const newUser = new User({ username, password: hashedPassword });

      // Save the new user to the database
      await newUser.save();

      res.status(201).json({ message: "User created successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;