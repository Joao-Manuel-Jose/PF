import { ButtonHTMLAttributes, ReactNode } from "react"
interface propsButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
}

export function ButtonG({children,...props}:propsButton){
    return(
        <button  className="flex-shrink-0   
        text-sm text-blue py-1 px-2 rounded" {...props}>
         {children}   
        </button>
    )

}