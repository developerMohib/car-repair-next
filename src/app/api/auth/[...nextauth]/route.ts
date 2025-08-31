import { connectDB } from "@/utils/db";
import NextAuth, { Account, NextAuthOptions, Profile, User } from "next-auth";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import config from "@/utils/config";
import { AdapterUser } from "next-auth/adapters";

interface MyUser {
  id: string;
  name: string | null;
  email: string;
  image?: string;
}

interface SignInParams {
  user: AdapterUser | User;
  account: Account | null;
  profile?: Profile | undefined;
  email?: {
    verificationRequest?: boolean;
  };
  credentials?: Record<string, CredentialInput>;
}

const { db } = (await connectDB()) || { db: null };
if (!db) throw new Error("Failed to connect to the database");
const userCollection = db.collection("Users");

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
      ): Promise<MyUser | null> {
        if (!credentials) throw new Error("Unauthorized user");

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
    async signIn({ user, account }: SignInParams) {
      console.log("user 97", user, account);
      if (
        account?.provider === "google" ||
        account?.provider === "facebook" ||
        account?.provider === "twitter"
      ) {
        try {
          const existUser = await userCollection.findOne({ email: user.email });
          console.log("existUser 105", existUser);
          if (!existUser) {
            // Social user কে insert করার সময় unified schema follow করো
            const newUser = {
              fullName: user.name,
              email: user.email,
              image: user.image,
              provider: account.provider,
              createdAt: new Date(),
            };

            await userCollection.insertOne(newUser);
            return true;
          } else {
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      } else {
        return true;
      }
    },
  },
  secret: config.nextAuthSecret,

  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
