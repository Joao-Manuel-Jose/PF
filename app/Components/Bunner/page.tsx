import { LucideShoppingCart, Search } from "lucide-react";
import { MainLink } from "../Header/User/mainLink";
import Image from "next/image";
import logo from '@/public/logo.svg'



export function Bunner(){
    return(
        <div className="  bg-[url('/background/b-1.jpg')] bg-cover bg-center h-[30rem] ">
          {/*<div className='mt-10'>
            <h1 className=' text-center uppercase text-2xl md:text-4xl w-full text-gray-100 '>
            Okukula-Market
            </h1>
    </div>*/}
    <div className='bg-black bg-opacity-20  h-[30rem]'>
    <section className="pt-16 grid gap-4 justify-center items-center px-1 md:px-2">
             
    <div >
          
            <div className="grid justify-center ">
              <Image src={logo} width={200} height={70} className="text-white" alt="t"/>
            </div>
            
  

            <h1 className='mt-2  rounded-xl text-center text-xl md:text-4xl w-full  font-bold p-1 bg-white text-[#97998c]'>
           Bem-Vindo
            </h1>
    </div>
          <div className="">
          
          
          <p className=' text-center text-sm md:text-md text-gray-50 font-semibold'>
            Cultive o seu legado agricola com o AgroClick,
            <br/> onde cada click é uma promessa de prosporidade!!
            </p>
          </div>
         
    
        
          </section>
          </div>
        </div>
    )
}