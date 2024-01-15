import ModaUser from "@/app/(User)/User/NUser/[params]/modal/page";
import { CircleUserRoundIcon, Eye, EyeIcon, ListIcon, LogOutIcon, ScanEye } from "lucide-react";

export const UserNMycontentOfcanvas=[
    { name: ' Perfil', href: '#', icone:<CircleUserRoundIcon  size={30} />, componente:null },
    {
      name: ' Produtoras',
      href: '#',icone:<Eye color="#0b0c38"
      size={30}
      />,
      componente:null
    
    },
    { name: ' Fazendas', href: '#' , icone:<EyeIcon color="#000000" size={30} />,  componente:<ModaUser/>} ,
    {name:'Transportadoras', href:'#', icone:<EyeIcon color="#0b0c38" size={30} />,  componente:null},
    {name:'Compradores',href:'#', icone:<EyeIcon color="#c4da1b" size={30} />,  componente:null},
    {name:'Facturas',href:'#', icone:<ScanEye color="#2c12f3"  size={30} />,componente:null},
    {name:'Comprados',href:'#', icone:<ListIcon color="#2c12f3"  size={30} />, componente:null},
    {name:'Sair',href:'/', icone:<LogOutIcon size={30} />, componente:null}
]