import { ReactNode } from "react";

export function PagrathMensage({children}:{children:ReactNode}){
    return(
        <p>
        <span className="text-sm p-2 shadow-sm md:p-2 mb-5 bg-sky-400 cursor-pointer rounded-xl bg-opacity-70 
        
        font-normal text-gray-100 ">{children}</span>
        
        </p>
    )
}