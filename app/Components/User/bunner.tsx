import { ReactNode } from "react";
import { PicUser } from "./fto";

export function BunnerU({children}:{
    children:ReactNode
}){
    return(
        <div className="shadow-lg col-span-6 w-full  p-10 ">
           

            {children}
        </div>
    )
}