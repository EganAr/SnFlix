"use client"

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SignInButtonGoogle() {
    return (
        <Button onClick={() => signIn("google")} size={"icon"} variant={"outline"} className="w-12 h-10">
        <Image
          src={"/google.svg"}
          alt="google"
          width={200}
          height={200}
          className="w-6 h-6"
        />
      </Button>
    )
}