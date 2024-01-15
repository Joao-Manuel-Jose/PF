import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";


import { AnchorHTMLAttributes, ReactNode, useState } from 'react'





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
            'text-black block bg-gray-100 rounded-lg p-2',
            {
                ' text-blue-600': pathname === href
              }
  
          
          )}  {...props}>
                 {children}
          </Link>
              
      )
  }
  

/*interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  onClick?: () => void;
  onActivate?: () => void; // Função chamada quando o botão é ativado
  isActive: boolean;
  className?: string;
}

export function ButtonLink({
  children,
  onClick,
  onActivate,
  isActive,
  className,
  ...props
}: ButtonLinkProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (!isActive && onActivate) {
      onActivate();
    }
    setIsClicked(true);
  };

  return (
    <span
      className={clsx(
        'flex justify-center items-center text-black hover:brightness-90',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span
        className={clsx(
          'font-normal p-2 rounded-full bg-white shadow',
          {
            'bg-sky-500 bg-opacity-10': isActive || isClicked,
          }
        )}
      >
        {children}
      </span>
    </span>
  );
}*/

  export function ButtonLink({ children, href, ...props }: LinkProps){
   
    
      return(
        <Link href={href} className=
          ' flex justify-center items-center  text-black hover:brightness-90 '
          
          
          {...props}  >
            <span className={clsx(
          ' font-normal p-2 rounded-full bg-white shadow ',
          {
              ' bg-sky-500 text-white': true,
            })}
           >{children}</span>
                 
          </Link>
              
      )
  }
  export function Paragrath({children}:
    {children :ReactNode}){
      return <p className="text-xs font-normal">{children}</p>
    }