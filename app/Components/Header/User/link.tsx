import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";


import { AnchorHTMLAttributes, ReactNode } from 'react'





interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

export function LinkUserA({ children, href, ...props }: LinkProps){
  const pathname=usePathname()
  
    return(
      <Link href={href} className={clsx(
        'bg-white text-black shadow hover:brightness-90 rounded-lg p-2 flex justify-center items-center gap-1',
        {
            'ring ring-2 ring-cyan-400  font-semibold': pathname === href,
          }

        
        )}  {...props}>
               {children}
        </Link>
            
    )
}
export function LinkUserB({ children, href, ...props }: LinkProps){
    const pathname=usePathname()
    
      return(
        <Link href={href} className={clsx(
            'text-black block hover:bg-black hover:text-white rounded-lg p-2',
            {
                ' text-blue-600': pathname === href,
              }
  
          
          )}  {...props}>
                 {children}
          </Link>
              
      )
  }
