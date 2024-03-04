import { LucideShoppingCart, Search } from "lucide-react";
import { MainLink } from "../Header/User/mainLink";



export function Bunner(){
    return(
        <div className="bg-[url('/teste.jpg')] bg-cover bg-center h-[27rem]  ">
          {/*<div className='mt-10'>
            <h1 className=' text-center uppercase text-2xl md:text-4xl w-full text-gray-100 '>
            Okukula-Market
            </h1>
    </div>*/}
    <section className="pt-16 grid gap-8 justify-center px-1 md:px-2">
              <div>
          <div className="flex justify-center">
          <div className='mt-10 w-24 bg-white p-2 py-5 rounded-full shadow'>
            <MainLink/>
          </div>
          </div>
   
    </div>
          
    <div className=''>
            <h1 className=' text-center text-2xl md:text-4xl w-full text-gray-100 '>
            BEM-VINDO
            </h1>
    </div>
          <div className="">
          <h1 className='hidden sm:block text-white text-md sm:text-xl md:text-2xl p-2 rounded-3xl bg-orange-400  font-bold text- my-2'>
            Busque e compre Produtos do mercado angolano
          </h1>
          <div className=" mx-2 px-2 flex sm:hidden bg-orange-400 text-white items-center justify-center  rounded-2xl p-1">
            <Search  className="text-green-00" strokeWidth={3} /> 
            <h1 className=' text-white text-center text-md sm:text-xl md:text-2xl     font-bold text-md '>
           Busque e compre  Produtos 
          </h1>
          <LucideShoppingCart strokeWidth={3}/>
            </div>
          <p className=' text-center text-sm md:text-sm text-gray-50 font-semibold'>
            Com a Okukula-market vai cair uma chuva de comida,
            <br/> mas não vai deixar cair as chapas da casa de nimguém!!
            </p>
          </div>
         
    
        
          </section>

        </div>
    )
}