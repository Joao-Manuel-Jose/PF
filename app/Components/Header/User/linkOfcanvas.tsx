import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";


export function LinkOfCanvas({Children, href}:{Children:ReactNode,href:string}){
    return(
        <Link href={href} className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-md rounded-md  hover:bg-blue-300  hover:rounded-lg',
                    {
                        'bg-blue-500 text-white':href==' Inserir Produto '
                    })}
        >
                {Children}
        </Link>

}