import { ButtonHTMLAttributes, ReactNode } from "react"
interface propsButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
    color:string
}

export function ButtonG({children,color,...props}:propsButton){
    return(
        <button  className={`${color??'bg-transparent'} flex-shrink-0 rounded-full px-5   
        text-md text-white font-normal  py-1 px-2 rounded hover:translate-x-1
        transition-all `} {...props}>
         {children}   
        </button>
    )

}