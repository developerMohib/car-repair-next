import { connectDB } from "@/utils/db";

const { db } = (await connectDB()) || { db: null };
if (!db) throw new Error("Failed to connect to the database");
const benefitsCollection = db.collection("Benefits");

export const GET = async () => {
  try {
    const result = await benefitsCollection.find().toArray();
    return Response.json({
      success: true,
      message: "All services data retrived successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
