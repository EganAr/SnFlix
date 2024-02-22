"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface linkProps {
  name: string;
  href: string;
}

export const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

export default function NavbarLink() {
  const pathname = usePathname();
  return (
    <div className="lg:flex gap-4 ml-14 hidden">
      {links.map((link) => (
        <div key={link.name}>
          {pathname === link.href ? (
            <Link
              href={link.href}
              className="text-foreground underline text-sm"
            >
              {link.name}
            </Link>
          ) : (
            <Link href={link.href} className="text-gray-400 text-md">
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
