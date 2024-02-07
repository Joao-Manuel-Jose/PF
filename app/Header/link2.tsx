import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";


import { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function Linkb({ children, href, ...props }: LinkProps){
  const pathname=usePathname()
  
    return(
      <Link href={href} className={clsx(
        'text-black block hover:bg-black hover:text-white rounded-lg p-2',
        {
            'bg-sky-100 text-blue-600': pathname === href,
          }

        
        )}  {...props}>
               {children}
        </Link>
            
    )
}