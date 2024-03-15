import { ButtonHTMLAttributes, ReactNode } from "react"
interface propsButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
    color:string
}

export function ButtonProduct({children,color,...props}:propsButton){
    return(
        <button  className={`${color??'bg-transparent'}
        w-50 sm:w-full  mx-auto my-1
        md:mx-0 hover:bg-orange-300
        focus:border-white-500 flex items-center justify-center
         rounded-full border-2 border-white px-6 py-1 
        py-1 text-[0.65rem] font-bold
         uppercase text-white`} {...props}>
         {children}   
        </button>
    )

}