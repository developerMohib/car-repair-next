import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest): Promise<Response> => {
  const newUser = await req?.json();
  console.log("new user", newUser);
  try {
    const client = await connectDB();

    if (!client) {
      throw new Error("Failed to connect to the database");
    }
    const db = client.db("carRepairAutofix");
    const exist = await db.collection("User").findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "Email already exist" });
    }
    const result = await db.collection("User").insertOne(newUser);
    if (!result.acknowledged) {
      throw new Error("Failed to insert new user");
    }
    return NextResponse.json({
      message: "Successfully created account",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "User  not created" }, { status: 500 });
  }
};
