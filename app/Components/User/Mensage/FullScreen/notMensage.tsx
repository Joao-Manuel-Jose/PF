import { ReactNode } from "react"


export function  NotMenssage({children}:{
  children:ReactNode
}){
  return(
    <div className=" bg-[url('/Message/noMessage.jpg')] bg-cover bg-center h-full w-full flex items-center justify-center">
        {children}
    </div>
  )
}