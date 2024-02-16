import { LinkG } from "../../Global/link";
import { PicUser } from "../../User/fto";

export  async function SectionPhoto({src}:{src:string}){
  
    return(
      
<section className="bg-gray-50 shadow-sm md:w-90 sm:w-full p-2 rounded-xl my-2">
<div className="flex justify-center " >
    <PicUser src={src} />
    
   
</div>
<div className="my-1 flex justify-center " >
<article className=" shadow-3xl text-white bg-blue-400 rounded-xl p-2 text-center text-xs sm:text-sm md:text-md font-normal">
        Adm Gelson Santos
 
</article>
   
</div>



 </section>
 )
 }