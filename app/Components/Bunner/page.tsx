import { LucideShoppingCart, Search } from "lucide-react";



export function Bunner(){
    return(
        <div className="bg-[url('/background/comprador2.jpg')] bg-cover bg-center h-[30rem]  grid items-center  justify-center px-1 md:px-2 ">
          <div className='mt-10'>
            <h1 className='mt-10 text-center shadow-md text-2xl md:text-4xl w-full text-gray-100 '>
            Okukula <sub className='lowercase'>Mkt</sub>
            </h1>
          </div>
          
          <div>
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
         
    


        </div>
    )
}