import { ReactNode } from "react";

export function ParagrathNotification({children}:{
    children:ReactNode
}){
     return(
        <p className="sm:text-sm md:text-md font-normal p-1">{children}</p>
     )
}