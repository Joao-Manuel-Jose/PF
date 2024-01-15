import { FormHTMLAttributes, ReactNode } from "react";
interface formProps extends FormHTMLAttributes<HTMLFormElement>{
    children:ReactNode

}
export function Form({children,...props}:formProps){
    return(
    <div className=" max-w-md mx-auto bg-white p-1 rounded-2xl shadow-md
    ring-1  focus:ring-sky-500
  
    ">
    <form method="POST" className="flex items-center  " {...props}>
        {children}


    </form>
    </div>
    )

}