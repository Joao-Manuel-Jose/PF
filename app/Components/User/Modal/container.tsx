import { ReactNode } from "react";


export  function ContainerMoodal({children,className}:{children:ReactNode,className?:string}){
    return(
        <div className="  fixed inset-0 bg-black bg-opacity-50 z-50 py-10 flex align-items-center">
            <div className="fixed inset-0 mx-0 md:my-2 md:mx-3 flex items-center border-1 border-white">

            
     
                <div className={`${className??'bg-gray-100'} rounded-2xl w-full bg-gray-100  w-64 absolute  left-0 h-full sm:h-[99%]  overflow-y-auto  border border-2-white`}>
                  
                    {children}
                </div>
            </div>
        </div>
    )
}