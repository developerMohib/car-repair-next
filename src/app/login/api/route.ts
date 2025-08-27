import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const user = await req?.json();
  console.log('user',user)
};
