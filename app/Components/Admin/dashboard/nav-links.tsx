'use client'

// Map of links to display in the side navigation.

import clsx from "clsx";
import { HomeIcon, LucideCopy, LucideUsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/User/Admin', icon:<HomeIcon/> },
  {
    name: 'Fazendas',
    href: '/User/Admin/Fazendas',
    icon: <LucideCopy/>,
  },
  { name: 'Compradores', href: '#', icon: <LucideUsersRound/> },
];

export default function NavLinks() {
  const pathname=usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            {link.icon}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
