import { ReactNode } from "react";

export function Container({children}:{children:ReactNode}){
    return(
  
        <nav className="  z-900 py-4 bg-gray-50 shadow  w-full border-b border-b-2 border-gray-100">
     
           
          
          {children}
        
     
     </nav>

    )
}