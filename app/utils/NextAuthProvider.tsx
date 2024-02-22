"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const NextauthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
