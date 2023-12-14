//  /api/fundraisers/[fundraiserId]
// route used for Deleting a specific Fundraiser, getting a specific Fundraiser, Editing a specific Fundraiser
import { getServerSession } from "next-auth/next";
import dbConnect from "@/lib/db";
import Fundraiser from "@/models/Fundraiser";



const handler = async (req, res) => {
 
  await dbConnect();
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  const { fundraiserId } = req.query;

  // Delete a specific fundraiser
  if (req.method === "DELETE") {
    const session = await getServerSession(req, res);
    if (!session) {
      res.status(401).json({ message: "Not Authenticated to Delete a Fundraiser!" });
      return;
    }

    try {
      const existingFundraiser = await Fundraiser.findById(fundraiserId);

      if (!existingFundraiser) {
        return res.status(404).json({ error: "Fundraiser not found" });
      }

      // delete the fundraiser
      await existingFundraiser.deleteOne();
      res.status(200).json({ message: "Fundraiser deleted successfully" });
    } catch (error) {
      console.error("Error deleting fundraiser:", error);
      res.status(500).json({ error: "Internal server error" });
    }
    // Fetch a specific fundraiser
  } else if (req.method === "GET") {
    try {
      const existingFundraiser = await Fundraiser.findById(fundraiserId);

      if (!existingFundraiser) {
        return res.status(404).json({ error: "Fundraiser not found" });
      }

      res.status(200).json(existingFundraiser);
    } catch (error) {
      console.error("Error fetching fundraiser:", error);
      res.status(500).json({ error: "Internal server error" });
    }

    // Edit a specific fundraiser
  } else if (req.method === "PUT") {
    const session = await getServerSession(req, res);
    if (!session) {
      res.status(401).json({ message: "Not Authenticated to Edit a Fundraiser!" });
      return;
    }

    try {
      const { title, description, imageLink, fundraiserDate } = req.body;

      const existingFundraiser = await Fundraiser.findById(fundraiserId);

      if (!existingFundraiser) {
        return res.status(404).json({ error: "Fundraiser not found" });
      }

      // Update the fundraiser with the new data
      existingFundraiser.title = title;
      existingFundraiser.description = description;
      existingFundraiser.imageLink = imageLink;
      existingFundraiser.fundraiserDate = new Date(fundraiserDate);

      // Save the updated fundraiser to the database
      await existingFundraiser.save();
      res.status(200).json({ message: "Fundraiser updated successfully" });
    } catch (error) {
      console.error("Error updating fundraiser:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

export default handler;