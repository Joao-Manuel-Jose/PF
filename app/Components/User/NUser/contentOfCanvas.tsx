import ModaUser from "@/app/(User)/User/NUser/[params]/modal/Fazenda/page";
import { CircleUserRoundIcon, Eye, EyeIcon, Factory, FileCheck, ListIcon, LogOutIcon, ScanEye } from "lucide-react";

export const UserNMycontentOfcanvas=[
    { name: ' Perfil', href: '#', icone:<CircleUserRoundIcon  size={30} />, componente:null },
    {
      name: ' Produtoras',
      href: '#',icone:<Factory 
      size={30}
      />,
      componente:null
    
    },
    { name: ' Fazendas', href: '#' , icone:<EyeIcon color="#000000" size={30} />,  componente:<ModaUser/>} ,
    {name:'Transportadoras', href:'#', icone:<EyeIcon color="#0b0c38" size={30} />,  componente:null},
    {name:'Compradores',href:'#', icone:<EyeIcon size={30} />,  componente:null},
    {name:'Facturas',href:'#', icone:<FileCheck   size={30} />,componente:null},
    {name:'Comprados',href:'#', icone:<ListIcon   size={30} />, componente:null},
    {name:'Sair',href:'/', icone:<LogOutIcon size={30} />, componente:null}
]