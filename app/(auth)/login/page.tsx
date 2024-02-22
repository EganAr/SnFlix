import SignInButtonGithub from "@/app/component/SignInButton";
import SignInButtonGoogle from "@/app/component/SignInButtonGoogle";
import { authOptions } from "@/app/utils/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";

import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/home");
  }

  return (
    <div className="mt-24 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            variant={"ghost"}
            className="w-full bg-background hover:bg-background/60"
          >
            Sign in
          </Button>
        </div>
      </form>

      <div className="text-sm text-gray-400 mt-2">
        Don`t have an account?{" "}
        <Link href={"/sign-up"} className="hover:underline text-foreground">
          sign up
        </Link>
      </div>

      <div className="w-full flex justify-center items-center mt-6 gap-4">
        <SignInButtonGithub />
        <SignInButtonGoogle />
      </div>
    </div>
  );
}
