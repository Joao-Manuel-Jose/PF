import { CircleUserRoundIcon, ClipboardListIcon } from "lucide-react";
import {  ReactNode } from "react";
import { BarChart3, Eye, FileText, 
     LogOut ,PlusCircle} from "lucide-react"
import { Notification } from "../../User/Notifications/page.tsx";
import Mensage from "../../User/Mensage/page";


export const MycontentOfcanvas=[
    { name: 'Inserir Produto', href: '#', icone:<PlusCircle  size={30} strokeWidth={1.2} />  },
    {
      name: 'Visualizar Produtos',
      href: '#',icone:<Eye 
      size={30} strokeWidth={1.2}
      />,
     
    
    },
    {name:'Cadastrar Afilhada', href:'#', icone:<ClipboardListIcon color="#0b0c38" size={30} strokeWidth={1.2} /> },
    {name:'Perfil',href:'#', icone:<CircleUserRoundIcon  size={30} strokeWidth={1.2} /> },
    {name:'Vericar Rendimento',href:'#', icone:<BarChart3   size={30} strokeWidth={1.2}/> },
    { name: 'Gerar Relatório', href: '#' , icone:<FileText  size={30}  strokeWidth={1.2} />} ,
    
   
    
    {name:'Sair',href:'/', icone:<LogOut size={30} strokeWidth={1.2}  /> }
]





export function ContentOfcanvas({children, nome}:{
    children:ReactNode,
    nome:string | undefined
}){
    return(
        <>
            <h1 className="flex items-center text-md gap-2">
            <CircleUserRoundIcon size={40} className="flex text-gray-600" strokeWidth={0.8} />  {nome}
            </h1>
            <ul>
             {children}
            </ul>
            

        </>
    )
}