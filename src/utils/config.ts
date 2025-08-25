import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const config = {
  databaseUrl: process.env.NEXT_PUBLIC_MONGODB_URI || "",
  salt : process.env.NEXT_PUBLIC_SALTROUNDS ? parseInt(process.env.NEXT_PUBLIC_SALTROUNDS, 10) : 14,
};
export default config;
// veOFru29ISOeoVaT
// mohibullahmohim2020