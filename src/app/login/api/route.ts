import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const user = await req?.json();
  return new Response(JSON.stringify({ message: "Login successful", user }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  }); 
};
