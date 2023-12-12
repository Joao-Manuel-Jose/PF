import Link from "next/link";

import { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function Linka({ children, href, ...props }: LinkProps){
    return(
        <Link href={href}
        className=" bg-white text-black shadow hover:brightness-90
        rounded-lg p-2" {...props}> 
               {children}
           </Link>
    )
}