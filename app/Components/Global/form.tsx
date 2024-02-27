import { FormHTMLAttributes, ReactNode } from "react";
interface formProps extends FormHTMLAttributes<HTMLFormElement>{
    children:ReactNode

}
export function Form({children,...props}:formProps){
    return(
    <div className=" max-w-md mx-auto py-2 shadow-lg px-1 rounded-xl shadow-sm bg-gray-100
   
  
    ">
    <form method="POST" className="flex items-center  " {...props}>
        {children}


    </form>
    </div>
    )

}