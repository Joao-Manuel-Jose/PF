import { ReactNode } from "react";

export function ContainerLink({children}:{children:ReactNode}){
    return(
        <div className="hidden md:block">
                    <div className=" ml-4 flex items-center justify-center space-x-4">
                        {children}

                    </div>
        </div>
    )
}