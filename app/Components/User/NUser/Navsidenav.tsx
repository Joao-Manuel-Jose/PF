import clsx from "clsx";
import { HomeIcon, LucideCog, LucideCopy, LucideFileCheck2, LucideUserCog2, LucideUsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: 'Home', href: '/User/NUser', icon:<HomeIcon strokeWidth={1.2} /> },
    {
      name: 'Pagamentos',
      href: '/User/NUser/Payment',
      icon: <LucideCog strokeWidth={1.2}/>,
    },
    { name: 'Atualizações', href: '#', icon: <LucideUserCog2 strokeWidth={1.2}/> },
    { name: 'Produtos Comprados', href: '#', icon: <LucideFileCheck2 strokeWidth={1.2}/> },
  ];
export function SideNavUserNav(){
    const pathname=usePathname()
    return(
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
        
    )
}