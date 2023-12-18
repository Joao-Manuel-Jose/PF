"use client"
import Link from "next/link"
import { useState } from "react"
import { type } from "os"
type pasasr=[
    {
        src:string,
        nome:string,
  
        icone:string
   
       }
   

]
interface prin_link{
    src:string,
    nome:string,

    icone:string
    

}

export function Novo( principal: prin_link){
    const [isClick, setIsclick]=useState(false)
    const tooglerNavbar=()=>{
        
       const toogleNac=()=>{
        setIsclick(!isClick)
       }

    }
return(
    <>
    <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Link rel="stylesheet" className="text-white" 
                       href={principal.src} 
                        ><span className="ms-2">{principal.icone}</span>{principal.nome}</Link>

                       

                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-1">

                            <a href="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Home
                            </a>
                            <a href="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Sobre nós
                            </a>
                            <a href="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Login
                            </a>
                            <a href="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Cadastro
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="md:hidden  flex items-center ">
                            <button className="inline-flex items-center justify-center p2 bg-white
                             hover:bg-blue hover:text-black focus:outline-none focus:ring-2
                             focus:ring-inset  focus:ring-white 
                            " onClick={tooglerNavbar}>
                                 <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>



                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </nav>
    </>
)
}