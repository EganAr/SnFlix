import Image from "next/image";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={"/login_background.jpg"}
        alt="login background"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        fill
        priority
      />

      <h1 className="absolute top-4 left-4 text-4xl font-bold text-foreground md:left-10 md:top-6">
        SnFlix
      </h1>
      {children}
    </div>
  );
}
