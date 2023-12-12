import Link from "next/link";

import { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function Linkb({ children, href, ...props }: LinkProps){
    return(
        <Link href={href}
        className="text-black block hover:bg-black hover:text-white
        rounded-lg p-2" {...props}> 
               {children}
           </Link>
    )
}