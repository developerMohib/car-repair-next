import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

interface Config {
  databaseUrl: string | undefined;
  salt: number | undefined;

  googleClientId: string | undefined;
  googleClientSecret: string | undefined;

  facebookClientId: string | undefined;
  facebookClientSecret: string | undefined;

  twitterClientId: string | undefined;
  twitterClientSecret: string | undefined;

  nextAuthSecret: string | undefined;
}
const config: Config = {
  databaseUrl: process.env.MONGODB_URI,
  salt: process.env.SALTROUNDS
    ? parseInt(process.env.SALTROUNDS, 10)
    : 14,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

  facebookClientId: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,

  twitterClientId: process.env.TWITTER_CLIENT_ID,
  twitterClientSecret: process.env.TWITTER_CLIENT_SECRET,
  nextAuthSecret: process.env.NEXTAUTH_SECRET,
};
export default config;
