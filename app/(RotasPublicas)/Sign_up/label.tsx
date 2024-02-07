
import { FileImageIcon, ImageDownIcon, ImagePlusIcon } from "lucide-react";
import { LabelHTMLAttributes, ReactNode } from "react";

interface labelProps extends LabelHTMLAttributes<HTMLLabelElement>{
    children:ReactNode
}
export function LabelSignUp({children,...props}:labelProps){
    return(
        <label className="cursor-pointer"
        {...props}>
            <div className="mx-auto h-10 rounded-2xl
        text-gray-700 outline-none focus:ring-1 shadow bg-white py-2
      px-2 w-full  flex text-center ">
            <FileImageIcon  className="text-sky-400"/>
     
            {children}
            </div>
            </label>
    )

}
export function DivSignup({children}:labelProps){
    return(
        <div  className="mx-auto h-10 rounded-2xl
        text-gray-700 outline-none focus:ring-1 shadow bg-white py-2
      px-2 w-full  flex
        " >
         
     
            {children}
            </div>
    )

}