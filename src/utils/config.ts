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
  databaseUrl: process.env.NEXT_PUBLIC_MONGODB_URI,
  salt: process.env.NEXT_PUBLIC_SALTROUNDS
    ? parseInt(process.env.NEXT_PUBLIC_SALTROUNDS, 10)
    : 14,
  googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,

  facebookClientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,

  twitterClientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID,
  twitterClientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET,
  nextAuthSecret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
};
export default config;
// veOFru29ISOeoVaT
// mohibullahmohim2020
