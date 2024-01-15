"use client"
import { ReactNode,useState } from "react";
import { AlignJustify ,BellIcon,HomeIcon,MessageCircleIcon,X} from 'lucide-react'
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { MainLink } from "./mainLink";
import { MenuLinksSecondary } from "./secondaryLink";
import {  LinkUserB } from "./link";
import { ContainerLink } from "./containerLink";
import Badge from "./IconBadge";
import { ContentOfcanvas } from "./offcanvas"; 

import Offcanvas from "./offcanvas";

import { Notification } from "../../User/Notifications/page.tsx";
import Mensage from "../../User/Mensage/page";
import { HomeResult } from "../../User/NUser/homeResult";


export const linksIcon = [
    { name: 'Home', href1: '#', href2:'User/GelsonSantos' ,icone:<HomeIcon size={30} color="#27c5ec" /> ,componente:<HomeResult/>},
    { name: 'Mensagens', href1: '#', href2:'/User/Gelson_Santos/Mensagem', icone:<Badge icon={<MessageCircleIcon size={30} color="#27c5ec"/>}  count={5}/> , componente:<Mensage/>},
    { name: 'Notificações', href1: '#',href2:'Components/User/Notificatios' ,icone:<Badge icon={<BellIcon  size={30} color="#27c5ec" />} count={5}/> , componente:<Notification  props={5} />},
  
  
    
 
  ];

export function UserNav({children, data}:{
    children:ReactNode,
    data:ContentOfcanvas[]
}, ){
     const [isClick, setIsclick]=useState(false)
      const pathname=usePathname()
    function handleClick(){
        setTimeout(()=>{
            setIsclick(!isClick)

        },100)
        
    }
    return(
      
        <Container>
        <MenuLinksSecondary>
              <MainLink/>
               <ContainerLink>             
                      
                    {children}

                </ContainerLink>

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
                


         </MenuLinksSecondary>
    
            <div className="md:hidden ">
                <div className="flex justify-evenly gap-3 px-2 pt-2  space-x-3 sm:px-3" >

                    {linksIcon
                    .map((link,index)=>{
                            return(
                                <LinkUserB href={link.href2}  key={index}
                            >
                                    {link.icone}

                                </LinkUserB>
                            )
                        })}
                </div>

            </div>
{isClick&& (
    <Offcanvas onClose={()=>setIsclick(!isClick)} data={data} />
        

)}
        

</Container>
        
    )
}