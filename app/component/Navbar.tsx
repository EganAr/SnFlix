import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

export default function Navbar() {
  return (
    <div className="w-full max-2-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-5 lg:px-8">
      <div className="flex items-center">
        <Link href="/home" className="text-3xl font-bold text-primary ">
          Snflix
        </Link>
        <NavbarLink />
      </div>

      <div className="flex items-center gap-8">
        <ModeToggle />
        <Search className="w-6 h-6 text-foreground" />
        <Bell className="w-6 h-6 text-foreground" />
        <UserNav />
      </div>
    </div>
  );
}
