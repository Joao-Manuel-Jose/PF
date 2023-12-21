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
        'bg-white text-black shadow hover:brightness-90 rounded-lg p-2 ',
        {
            'bg-sky-100 text-blue-600': pathname === href,
          }

        
        )}  {...props}>
               {children}
        </Link>
            
    )
}