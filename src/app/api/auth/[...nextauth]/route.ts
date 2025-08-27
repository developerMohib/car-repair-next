import { connectDB } from "@/utils/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import toast from "react-hot-toast";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import config from "@/utils/config";

interface User {
  id: string;
  name: string | null;
  email: string;
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<User | null> {
        if (!credentials) {
          throw new Error("Unauthorize user");
        }

        const { db } = (await connectDB()) || { db: null };
        if (!db) {
          throw new Error("Failed to connect to the database");
        }
        const userCollection = db.collection("Users");
        const findUser = await userCollection.findOne({
          email: credentials.email,
        });
        if (!findUser) {
          toast.error("User  Not Found !");
          return null;
        }
        const matchPassword = bcrypt.compareSync(
          credentials.password,
          findUser.password
        );
        if (!matchPassword) {
          toast.error("Invalid Credentials");
          return null;
        }
        return {
          id: findUser._id.toString(),
          name: findUser.name ?? null,
          email: findUser.email,
        };
      },
    }),
    GoogleProvider({
      clientId: config.googleClientId!, // ! means must be thakbe
      clientSecret: config.googleClientSecret!,
    }),
    FacebookProvider({
      clientId: config.facebookClientId!,
      clientSecret: config.facebookClientSecret!,
    }),
    TwitterProvider({
      clientId: config.twitterClientId!,
      clientSecret: config.twitterClientSecret!,
      version: "2.0",
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/login",
  },
});
export { handler as GET, handler as POST };
