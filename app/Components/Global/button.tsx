import { ButtonHTMLAttributes, ReactNode } from "react"
interface propsButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
    color:string
}

export function ButtonG({children,color,...props}:propsButton){
    return(
        <button  className={`${color??'bg-transparent'}
        w-56 h-10 mx-auto 
        md:mx-0 hover:translate-x-1 transition-all 
        focus:border-white-500 flex items-center justify-center
         rounded-full border-2 border-white px-8 
        py-2 text-[0.88rem] font-bold
         uppercase text-white`} {...props}>
         {children}   
        </button>
    )

}