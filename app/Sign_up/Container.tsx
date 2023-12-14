import { ReactNode } from "react";

interface PropsConatiner{
    className:string,
    children:ReactNode
    cor?:string,
}

export function Container({children ,className,cor}:PropsConatiner){
    return(
        <div className={className}>
            <div className="flex items-center justify-center px-1 py-10">
                <div className={`${cor??'bg-gray-50'}  mx-1  grid items-center p-10  md:px-5 px-10 md:mt-20 mx-2 md:mx-14 
                 rounded-2xl shadow-2xl `}>
                    {children}
                </div>
            </div>
        </div>

)
}