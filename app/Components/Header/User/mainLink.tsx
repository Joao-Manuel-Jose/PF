import { LucideShoppingCart, LucideTrendingUp } from "lucide-react";
import Link from "next/link";

export function MainLink(){
    return(
        <Link href="#"className=" flex flex-col gap-0  text-white  font-medium">
        <p className="text-[12px] text-center px-[4px] font-semibold bg-orange-300 rounded-lg">
           Okukula
          
           </p>
           <span className="text-xs w-[5rem]  text-green-400 border-b rounded-[50%] border-orange-300 flex items-center justify-center gap-0 px-1">
           <LucideShoppingCart className="h-5 "/>
               Mkt
               <LucideTrendingUp className="text-sky-300" />
           </span>
       
   </Link>
    )
}