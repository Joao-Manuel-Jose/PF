import { ReactNode } from "react";

export function ContContent({children}:{children:ReactNode}){
    return(
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16">
     
           
          
            {children}
        
     
            </div>
        </div>

    )
}
