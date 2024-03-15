import { FormHTMLAttributes, ReactNode } from "react";
interface formProps extends FormHTMLAttributes<HTMLFormElement>{
    children:ReactNode

}
export function Form({children,...props}:formProps){
    return(
    <div className="  py-1 shadow-lg  rounded-xl shadow-sm bg-gray-50
   
  
    ">
    <form method="POST" className="flex items-center  " {...props}>
        {children}


    </form>
    </div>
    )

}