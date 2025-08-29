import { connectDB } from "@/utils/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import config from "@/utils/config";

interface User {
  id: string;
  name: string | null;
  email: string;
  image?: string;
}

export const authOptions: NextAuthOptions = {
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
        if (!credentials) throw new Error("Unauthorized user");

        const { db } = (await connectDB()) || { db: null };
        if (!db) throw new Error("Failed to connect to the database");

        const userCollection = db.collection("Users");
        const findUser = await userCollection.findOne({
          email: credentials.email,
        });

        if (!findUser) throw new Error("User not found");

        const matchPassword = bcrypt.compareSync(
          credentials.password,
          findUser.password
        );

        if (!matchPassword) throw new Error("Invalid credentials");

        return {
          id: findUser._id.toString(),
          name: findUser.fullName ?? null,
          email: findUser.email,
          image: findUser.image,
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = (token.id ?? token.id) as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  secret: config.nextAuthSecret,

  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
