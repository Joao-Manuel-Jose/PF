"use client"
import { useAuth } from "@/app/(User)/user";
import { LinkG } from "@/app/Components/Global/link";
import { ButtonLink } from "@/app/Components/Header/User/link";
import { NavAlternative } from "@/app/Components/Header/User/navbar2/Alternative";
import LinKroute from "@/app/Components/Header/User/navbar2/Alternative/linkroutes";
import clsx from "clsx";
import { LocateIcon, LockKeyholeIcon, LucideBlocks, LucideMapPinned, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    const {user,updateUser}=useAuth()
    const pathname=usePathname()
    const links = [
        {
            name: 'Dados',
             href:`/User/${user?.nome}/Upgrade/Dados`,
           icon: <User/>,
          },
        { name: 'Privado', href: `/User/${user?.nome}/Upgrade/Private`, icon:<LockKeyholeIcon/>},
      
        { name: 'Localização', href:`/User/${user?.nome}/Upgrade/Localization`, icon: <LucideMapPinned/> },
      ];
    if(user)
    return (
      
        <div >
        <NavAlternative hrf={`/User/${user.nome}/`}/>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
        <LinKroute title="Atualizações">
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
        </LinKroute>
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
       
        
    </div>
      
    );
  }