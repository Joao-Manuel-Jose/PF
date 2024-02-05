import Link from "next/link";

export function MainLinkHeader(){
    return(
        <div className="flex items-center">
                
                        <div className="flex-shrink-0">
                            <Link href="/"className="  text-black  px-3 py-2 font-medium">
                            <h1 className="text-2xl text-black font-bold">Tchivala</h1></Link>


                        </div>


         </div>

    )
}