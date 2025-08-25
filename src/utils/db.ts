import { MongoClient, ServerApiVersion, Db } from "mongodb";
import config from "./config";

let client: MongoClient | null = null;
let db: Db | null = null;
const connectDB = async () => {
  const uri = config.databaseUrl;
  if (!uri) throw new Error("Missing MongoDB URI in environment variables");
  try {
    if (!client) {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
      await client.connect();
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    }
    if (!db) {
      db = client.db("carRepairAutofix");
    }
    return { client, db };
    
  } catch (error) {
    console.log(error);
  }
};
// Export the connectDB function
export { connectDB };