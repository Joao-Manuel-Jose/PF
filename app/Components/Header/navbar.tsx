"use client"
import React, 


{ useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Linka } from "./link";
import { Linkb } from "./link2";
import { AlignJustify ,HomeIcon,X} from 'lucide-react'
import { usePathname } from "next/navigation";
import { HeaderContainer } from "./containerHeader";
import { ContContent } from "./ContContent";
import { MainLinkHeader } from "./mainlink";


export function Navbar(){
    const [isClick, setIsclick]=useState(false)
    const links = [
        { name: 'Home', href: '/' },
        {
          name: 'Sobre nós',
          href: '/AboutUs',
        
        },
        { name: 'Login', href: '/Login'},
        {name:'Cadastrar', href:'/Sign_up'},
  
      ];
      const pathname=usePathname()
    function handleClick(){
        setTimeout(()=>{
            setIsclick(!isClick)

        },100)
        
    }
    return(
        <>
        <HeaderContainer>
        
            <ContContent>
                <MainLinkHeader hrf="/"/>
               
                <div className="hidden md:block">
                        <div className=" ml-4 flex items-center space-x-4">
                            {links.map((link,index)=>{
                                return(
                                    <Linka href={link.href} key={index}
                                >
                                        {link.name}
                                    </Linka>
                                )
                            })}
                          


                        </div>

                    </div>
                    <div className="md:hidden  flex items-center">
                        <button className="
                        inline-flex items-center justify-center p2 bg-white
                         hover:text-black focus:outline-none focus:ring-2
                        focus:ring-inset  focus:ring-white " onClick={handleClick}>
                            {isClick?
                              <X  className="border-md cursor-pointer bg-gray-500/5 md:hidden"/>
                               
                            :
                            
                            <AlignJustify className="border-md cursor-pointer bg-gray-500/5 md:hidden"/>
                        }
        
                        </button>

                    </div>


            </ContContent>
            {isClick &&(
                <div className="md:hidden bg-gray-50">
                    <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3" >

                        {links.map((link,index)=>{
                                return(
                                    <Linkb href={link.href} onClick={handleClick} key={index}
                                >
                                        {link.name}
                                    </Linkb>
                                )
                            })}
                    </div>

                </div>

            )}

        </HeaderContainer>
        
        </>
    )
}