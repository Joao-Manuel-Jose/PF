import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";


import { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function Linka({ children, href, ...props }: LinkProps){
  const pathname=usePathname()
  
    return(
      <Link href={href} className={clsx(
        'bg-white  font-normal shadow hover:brightness-90 rounded-lg py-2 px-2  ',
        {
            ' text-orange-300 font-normal': pathname === href,
          }

        
        )}  {...props}>
               {children}
        </Link>
            
    )
}
