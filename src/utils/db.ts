import { MongoClient, ServerApiVersion } from "mongodb";
import config from "./config";

export const connectDB = async () => {
  const uri = config.databaseUrl;
  if (!uri) throw new Error("Missing MongoDB URI in environment variables");
  try {
    let client: MongoClient | null = null;
    if (!client) {
    client = new MongoClient(uri as string, {
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
  return client;
    
  } catch (error) {
    console.log(error);
  }
};

connectDB()