import { ReactNode } from "react";
import { PicUser } from "./fto";

export function BunnerU({children}:{
    children:ReactNode
}){
    return(
        <div className=" col-span-6 py-0  px-0 md:py-3 md:px-2 ">
           

            {children}
        </div>
    )
}