"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const useSocialLogin = () => {
  const searchParams = useSearchParams();
  console.log("search params", searchParams);
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handlerSocialLoginButton = async (provider: string) => {
    console.log("provider", provider);

    // redirect: false allows you to control where user goes manually
    const res = await signIn(provider, { redirect: true, callbackUrl });
    console.log("res", res);

    if (res?.ok) {
      // next-auth automatically redirects if callbackUrl provided
      // you can also handle manual redirect here if needed
      window.location.href = res.url || callbackUrl;
    }
  };

  return { handlerSocialLoginButton };
};
