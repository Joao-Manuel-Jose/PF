import { CircleUserRoundIcon } from "lucide-react";
import {  ReactNode } from "react";
import { BarChart3, BarChart3Icon, Bell, BellRing, CircleUserRound, ClipboardEdit, Eye, FileText, GitPullRequestIcon, 
    Home, LogOut,MessageCircle ,PlusCircle, Sparkles} from "lucide-react"
import { Notification } from "../../User/Notifications/page.tsx";
import Mensage from "../../User/Mensage/page";


export const MycontentOfcanvas=[
    { name: ' Inserir Produto ', href: '#', icone:<PlusCircle  size={30} />, componente:<Notification props={5}/> },
    {
      name: 'Visualizar Produtos',
      href: '#',icone:<Eye color="#0b0c38"
      size={30}
      />,
      componente:<Notification props={5}/>
    
    },
    { name: 'Gerar Relatório', href: '#' , icone:<FileText color="#000000" size={30} />,  componente:<Mensage/>} ,
    {name:'Editar Produto', href:'#', icone:<ClipboardEdit color="#0b0c38" size={30} />,  componente:<Notification props={5}/>},
    {name:'Promover produto',href:'#', icone:<Sparkles color="#c4da1b" size={30} />,  componente:<Notification props={5}/>},
    {name:'Vericar Rendimento',href:'#', icone:<BarChart3 color="#2c12f3"  size={30} />, componente:<Notification props={5}/>},
    {name:'Sair',href:'/', icone:<LogOut size={30} />, componente:<Notification props={5}/>}
]





export function ContentOfcanvas({children, nome}:{
    children:ReactNode,
    nome:string | null
}){
    return(
        <>
            <h1 className="flex items-center text-xl gap-2">
            <CircleUserRoundIcon size={40} className="flex text-gray-600" strokeWidth={0.8} />  {nome}
            </h1>
            <ul>
             {children}
            </ul>
            

        </>
    )
}