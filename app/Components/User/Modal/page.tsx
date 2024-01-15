
import { X } from "lucide-react"
import { ReactNode } from "react"
import { ContainerMoodal } from "./container"
import { Metadata } from "next"

 export type modalProps={
    isOpen:string | null,
    onClose:()=>void,
    children:ReactNode
}

export function Modal({isOpen,onClose,children}:modalProps){
 if(isOpen)
    return(
        <ContainerMoodal >
        <div className=" mb-4 cursor-pointer ">
            <X className="text-red-700  text-md "  onClick={()=>setTimeout(()=>{
            onClose()
        },500)}/>
        </div>
      <div className=" p-4 z-10">
        {children}
        <button className="mt-4 p-2 bg-blue-500 text-white" 
        onClick={()=>setTimeout(()=>{
            onClose()
        },200)}>
          Fechar Modal
        </button>
      </div>
      </ContainerMoodal>
    
    )
}