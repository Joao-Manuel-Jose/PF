import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string,
   color:string
}


export function LinkG({ children,color,...props }: LinkProps) {
  return (
    <Link
      className={`${color??'bg-transparent'} mx-auto md:mx-0 hover:translate-x-1
      transition-all focus:border-white-500 flex items-center justify-center rounded-full 
       py-2 text-[0.80rem] font-bold uppercase text-white`}
      {...props}
    >
      {children}
    </Link>
  )
}
