import { LabelHTMLAttributes, ReactNode } from "react";

interface labelProps extends LabelHTMLAttributes<HTMLLabelElement>{
    children:ReactNode
}
export function Label({children,...props}:labelProps){
    return(
        <label  className="ms-0 sm:ms-2 font-normal text-sm mx-auto md:text-md" {...props}>{children}</label>
    )

}