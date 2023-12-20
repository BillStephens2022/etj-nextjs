// /api/fundraiser
// route used for adding new fundraisers, getting all fundraisers
import { getServerSession } from "next-auth/next";

import Fundraiser from "@/models/Fundraiser";
import dbConnect from "@/lib/db";


const handler = async (req, res) => {

  await dbConnect();
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  // Add a new Fundraiser
  if (req.method === "POST") {
    
    const session = await getServerSession(req, res);

    if (!session) {
      res.status(401).json({ message: "Not Authenticated to Add a Fundraiser!" });
      return;
    }
    const { title, description, imageLink, fundraiserDate } = req.body;

    try {
      const newFundraiser = new Fundraiser({
        title,
        description,
        imageLink,
        fundraiserDate: new Date(fundraiserDate),
      });
      await newFundraiser.save();
      res.status(201).json({ message: "Fundraiser added successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
} else if (req.method === "GET") {
    try {
      const fundraisers = await Fundraiser.find({});
      res.status(200).json(fundraisers);
    } catch (error) {
      console.error("Error fetching fundraisers:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

export default handler;