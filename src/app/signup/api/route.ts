import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import config from "@/utils/config";

export const POST = async (req: NextRequest): Promise<Response> => {
  const newUser = await req?.json();
  const saltRounds = bcrypt.genSaltSync(config.salt);
  try {
    const { db } = (await connectDB()) || { db: null };
    if (!db) {
      throw new Error("Failed to connect to the database");
    }

    // existing user and checker
    const exist = await db.collection("User").findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "Email already exist" });
    }

    // New user created
    const userCollection = db.collection("Users");
    const hashedPassword = bcrypt.hashSync(newUser.password, saltRounds); // password hashing
    const result = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
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
