import { signIn } from "next-auth/react";

export const handlerSocialLoginButton = async (provider: string) => {
  console.log("provider", provider);
  const res = await signIn(provider) ;
  console.log('res',res)
};
