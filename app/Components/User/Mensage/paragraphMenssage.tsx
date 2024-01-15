import { ReactNode } from "react";

export function PagrathMensage({children}:{children:ReactNode}){
    return(
        <span className="text-sm p-2 md:p-3 my-2 bg-sky-400 cursor-pointer rounded-lg bg-opacity-70 
        
        font-normal text-gray-100 block">{children}</span>
    )
}