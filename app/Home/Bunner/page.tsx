import { ButtonC } from "@/app/Components/ContainerImage/button";
import { CounterHome } from "../Counters";
import { LucideShoppingCart, Search, ShoppingBagIcon } from "lucide-react";



export function BunnerHome(){
    return(
        
          <div className='pt-10 grid   justify-center px-1 md:px-2 '>
            <h1 className='my-5 text-center shadow-md text-2xl md:text-4xl w-full text-gray-100 '>
            Okukula <sub className='lowercase'>Mkt</sub>
            </h1>
          
          
          <div className="mt-8 mb-2">
            <div className="px-4 md:px-8 flex bg-orange-400 text-white items-center justify-center  rounded-2xl p-1">
            <Search  className="text-green-00" strokeWidth={3} /> 
            <h1 className=' text-white text-center text-md sm:text-xl md:text-2xl     font-bold text-md '>
           Busque e compre  Produtos 
          </h1>
          <LucideShoppingCart strokeWidth={3}/>
            </div>
        
          <p className='mt-2 text-center text-sm md:text-sm text-gray-50 font-semibold'>
            Com a Okukula-market vai cair uma chuva de comida,
            <br/> mas não vai estragar as chapas da casa de nimguém!!
            </p>
            <p className='  mt-3 text-center text-xs md:text-sm text-gray-50 font-semibold px-1'>
          Aqui
              podes comprar prudutos agricolas e derivados <br />
                de forma online 
              com a   disponibilidade de <br /> serviços   de transportes.
            </p>
        
            
          </div>
          <div className="flex justify-center mt-3">
            
            <ButtonC>Entrar</ButtonC>
              </div>
        
          </div>
        

    
    )
}