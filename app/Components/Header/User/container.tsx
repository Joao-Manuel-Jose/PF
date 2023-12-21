import { ReactNode } from "react";

export function Container({children}:{children:ReactNode}){
    return(
        <nav className="  z-30 py-4 bg-gray-100 shadow  w-full border-b border-b-1 border-green-100">
     
           
          
          {children}
        
     
     </nav>
    )
}