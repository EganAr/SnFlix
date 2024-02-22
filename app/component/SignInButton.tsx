"use client"

import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignInButtonGithub() {
    return (
        <Button
        onClick={() => signIn("github")}
        size={"icon"}
        variant={"outline"}
        className="w-12 h-10"
      >
        <GithubIcon className="w-6 h-6" />
      </Button>
    )
}