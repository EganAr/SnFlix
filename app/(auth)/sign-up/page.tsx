import { authOptions } from "@/app/utils/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/home");
  }
  return (
    <div className="mt-24 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-2xl font-bold">sign up</h1>
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
            Sign up
          </Button>
        </div>
      </form>

      <div className="text-sm text-gray-400 mt-2">
        Already have an account?{" "}
        <Link href={"/login"} className="hover:underline text-foreground">
          Login
        </Link>
      </div>

      <div className="w-full flex justify-center items-center mt-6 gap-4">
        <Button size={"icon"} variant={"outline"} className="w-12 h-10">
          <GithubIcon className="w-6 h-6" />
        </Button>
        <Button size={"icon"} variant={"outline"} className="w-12 h-10">
          <Image
            src={"/google.svg"}
            alt="google"
            width={200}
            height={200}
            className="w-6 h-6"
          />
        </Button>
      </div>
    </div>
  );
}
