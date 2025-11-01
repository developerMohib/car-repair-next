import { connectDB } from "@/utils/db";
import NextAuth from "next-auth";
import { authOptions } from "@/utils/authOptions";


const { db } = (await connectDB()) || { db: null };
if (!db) throw new Error("Failed to connect to the database");

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
