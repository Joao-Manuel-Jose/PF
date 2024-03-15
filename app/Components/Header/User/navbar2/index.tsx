import { AlignJustify, BellIcon, MessageCircleIcon, ShoppingCartIcon, X } from "lucide-react";
import { LinkUserB } from "../link";
import Offcanvas, { ContentOfcanvas } from "../offcanvas";
import { ContainerLink } from "../containerLink";
import { MainLink } from "../mainLink";
import { MenuLinksSecondary } from "../secondaryLink";
import { Container } from "../container";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { Notification } from "@/app/Components/User/Notifications/page.tsx";
import Mensage from "@/app/Components/User/Mensage/page";
import { CardBuy } from "@/app/Components/User/NUser/cardBuy";
import Badge from "../IconBadge";
import { MainLinkHeader } from "../../mainlink";

export const linksIconN= [
    { name: 'Notificações', href1: '#',href2:'Components/User/Notificatios' ,icone:<Badge icon={<BellIcon  size={30} color="#27c5ec" />} count={5}/> , componente:<Notification  props={5} />},
    { name: 'Mensagens', href1: '#', href2:'/User/Gelson_Santos/Mensagem', icone:<Badge icon={<MessageCircleIcon size={30} color="#27c5ec"/>}  count={2}/> , componente:<Mensage/>},
   
    { name: 'Carrinho', href1: '#',href2:'User/GelsonSantos' ,icone:<ShoppingCartIcon size={30} color="#27c5ec" className="h-auto md:h-9" /> , componente:null},
  
    
 
  ];
  export function UserNavN({children, data, href}:{
    children:ReactNode,
    data:ContentOfcanvas[],
    href:string
}){
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
              <MainLinkHeader hrf={href}/>
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

                    {linksIconN
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