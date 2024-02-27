import Link from 'next/link';
import { LogOutIcon, PowerOffIcon, PowerSquareIcon } from 'lucide-react';
import { ReactNode } from 'react';


export default function SideNavUser({children,gestor,link,homeLink}:{children:ReactNode,gestor:ReactNode,link:ReactNode,homeLink:string}) {
  return (
    <div className="flex h-full flex-col px-1 pt-1">
      <Link
        className="hidden md:flex mb-2 flex h-20 items-end justify-start rounded-md bg-orange-300 p-2  md:h-36"
        href={homeLink}
      >
        <div className="w-32 text-white md:w-40">
         {gestor}
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
       {children}
    
       
      </div>
    </div>
  );
}