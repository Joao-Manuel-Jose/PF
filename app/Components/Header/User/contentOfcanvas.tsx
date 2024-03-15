import { CircleUserRoundIcon, ClipboardListIcon, LucideCreditCard } from "lucide-react";
import {  ReactNode } from "react";
import { BarChart3, Eye, FileText, 
     LogOut ,PlusCircle} from "lucide-react"
import { Notification } from "../../User/Notifications/page.tsx";
import Mensage from "../../User/Mensage/page";


export const MycontentOfcanvas=[
    { name: 'Inserir Produto', href: '#', icone:<PlusCircle   strokeWidth={1.2} />  },
    {
      name: 'Produtos',
      href: '#',icone:<Eye 
       strokeWidth={1.2}
      />,
     
    
    },
    {name:'Pagamento', href:'#', icone:<LucideCreditCard     strokeWidth={1.2} /> },
    {name:'Cadastrar afilhada', href:'#', icone:<ClipboardListIcon color="#0b0c38"  strokeWidth={1.2} /> },
    {name:'Perfil',href:'#', icone:<CircleUserRoundIcon  strokeWidth={1.2} /> },
    {name:'Vericar Rendimento',href:'#', icone:<BarChart3   strokeWidth={1.2}/> },
    { name: 'Gerar Relatório', href: '#' , icone:<FileText   strokeWidth={1.2} />} ,
    
   
    
    {name:'Sair',href:'/', icone:<LogOut strokeWidth={1.2}  /> }
]





export function ContentOfcanvas({children, nome}:{
    children:ReactNode,
    nome:string | undefined
}){
    return(
        <>
            <div className="sticky top-0 h-auto  bootom-0 ">
            <h1 className="flex items-center text-md gap-2">
            <CircleUserRoundIcon size={40} className="flex text-gray-600" strokeWidth={0.8} />  {nome}
            </h1>
        
                   <ul>
             {children}
            </ul>
            </div>
 
            

        </>
    )
}