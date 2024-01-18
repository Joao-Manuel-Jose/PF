
import { X } from "lucide-react"
import { ReactNode } from "react"
import { ContainerMoodal } from "./container"
import { Metadata } from "next"
import { TitleG } from "../../Global/title"
import { ButtonG } from "../../Global/button"

 export type modalProps={
    isOpen:string | null,
    onClose:()=>void,
    children:ReactNode,
    title:string
}

export function Modal({isOpen,onClose,children,title}:modalProps){
 if(isOpen)
    return(
        <ContainerMoodal >
        <div className="bg-white z-50 shadow-sm mb-4 cursor-pointer p-2 pb-3 top-0 fixed-top border-b border-gray-300 rounded-xl ">
            <X className="text-red-700  text-md "  onClick={()=>setTimeout(()=>{
            onClose()
        },300)}/>
       <TitleG>{title}</TitleG>
        </div>
      <div className=" p-4 z-10">
        {children}
       <ButtonG color="bg-sky-500"
        onClick={()=>setTimeout(()=>{
            onClose()
        },200)}>
          Fechar 
        </ButtonG >
      </div>
      </ContainerMoodal>
    
    )
}