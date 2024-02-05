

import { ReactNode } from "react";


interface PropsConatiner{
    className:string,
    children:ReactNode
    cor?:string,
}

export function ContainerForm({children ,className,cor}:PropsConatiner){
    return(
        <div className={`${className} flex items-center justify-center`}>
            <div className="flex items-center justify-center px-1 py-10 w-[100%]">
                <div className={`${cor??'bg-gray-50 '}   grid items-center md:p-10 p-4  md:px-5 px-4  md:mx-14 
                 rounded-2xl shadow-2xl `}>
                    {children}
                </div>
            </div>
        </div>

)
}