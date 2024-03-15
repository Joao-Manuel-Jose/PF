import { LucideShoppingBag, LucideShoppingCart, LucideStore, LucideTrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function MainLinkHeader({hrf}:{hrf:string}){
    return(
    
                   
                        
                            <Link href={hrf}className="text-xs flex flex-col gap-0  text-white  font-medium">
                                <Image src='/logo.svg' width={70} height={50} alt="logo"/>
                              
                                
                            </Link>

         


       

    )
}