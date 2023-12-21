"use client"
import React, 


{ useState } from "react";



import { AlignJustify ,Bell,BellIcon,BellRing,CircleEllipsis,HomeIcon,MessageCircleIcon,X} from 'lucide-react'
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { MainLink } from "./mainLink";
import { MenuLinksSecondary } from "./secondaryLink";
import { LinkUserA, LinkUserB } from "./link";
import { ContainerLink } from "./containerLink";
import Badge from "./IconBadge";
import { count } from "console";
import Offcanvas from "./offcanvas";


export function UserNav(){
    const [isClick, setIsclick]=useState(false)
    const links = [
        { name: 'Home', href: '/User/Gelson_Santo' ,icone:<HomeIcon size={30} color="#27c5ec" />},
        { name: 'Notificações', href: '/User/Gelson_Santo/Notification' ,icone:<Badge icon={<BellIcon  size={30} color="#27c5ec" />} count={5}/>},
        { name: 'Mensagens', href: '#', icone:<Badge icon={<MessageCircleIcon size={30} color="#27c5ec"/>}  count={20}/>},
      
        
     
      ];
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
               <ContainerLink>                        {links.map((link,index)=>{
                            return(
                                <LinkUserA href={link.href} key={index}
                            >{link.icone}
                                    {link.name}
                                </LinkUserA>
                            )
                        })}
                      


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

                    {links.map((link,index)=>{
                            return(
                                <LinkUserB href={link.href}  key={index}
                            >
                                    {link.icone}
                                </LinkUserB>
                            )
                        })}
                </div>

            </div>
{isClick&& (
    <Offcanvas onClose={()=>setIsclick(!isClick)}/>
        

)}
        

</Container>
        
    )
}