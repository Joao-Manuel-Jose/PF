import { ButtonHTMLAttributes, ReactNode } from "react"
interface propsButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
    color:string
}

export function ButtonPf({children,color,...props}:propsButton){
    return(
        <button  className={`${color??'bg-transparent'}
        w-50  mx-auto my-1
        md:mx-0 hover:translate-x-1 transition-all 
        focus:border-white-500 flex items-center justify-center
         rounded-full border-2 border-white px-4 
        py-1 text-[0.65rem] font-bold
         uppercase text-white`} {...props}>
         {children}   
        </button>
    )

}