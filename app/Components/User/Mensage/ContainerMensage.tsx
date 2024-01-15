import { Children, FormHTMLAttributes, ReactNode } from "react"
interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
    children:ReactNode
}
export function ContainerMensage({children, ...props }:FormProps ){

    return(
        <div className=" max-w-md mx-auto bg-white p-1 rounded-2xl shadow-md
        ring-1  focus:ring-sky-500
      
        ">
        <form method="POST" className="  flex items-center  " {...props}>
            {children}


        </form>
        </div>

    )
}