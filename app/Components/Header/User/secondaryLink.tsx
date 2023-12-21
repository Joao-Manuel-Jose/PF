import { ReactNode } from "react";



export function MenuLinksSecondary({children}:{children:ReactNode}){
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
        
           
                {children}
            
            </div>
     
        </div>
    )
}