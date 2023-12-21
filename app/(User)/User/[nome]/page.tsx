import { Linka } from "@/app/Components/Header/link"
import { BunnerU } from "@/app/Components/User/bunner"
import { PicUser } from "@/app/Components/User/fto"
import clsx from "clsx"

import { BarChart3, BarChart3Icon, Bell, BellRing, CircleUserRound, ClipboardEdit, Eye, FileText, GitPullRequestIcon, 
    Home, LogOut,MessageCircle ,PlusCircle, Sparkles} from "lucide-react"
import Link from "next/link"
import { Notification } from "./notification"

export default function User({params}:{
    params:{
        nome:string
    }
}){   const links = [
  
   
    { name: ' Inserir Produto ', href: '#', icone:<PlusCircle  size={30} /> },
    {
      name: 'Visualizar Produtos',
      href: '#',icone:<Eye color="#0b0c38"
      size={30}
      />
    
    },
    { name: 'Gerar Relatório', href: '#' , icone:<FileText color="#000000" size={30} />},
    {name:'Editar Produto', href:'#', icone:<ClipboardEdit color="#0b0c38" size={30} />},
    {name:'Promover produto',href:'#', icone:<Sparkles color="#c4da1b" size={30} />},
    {name:'Vericar Rendimento',href:'#', icone:<BarChart3 color="#2c12f3"  size={30} />},
    {name:'Sair',href:'/', icone:<LogOut size={30} />}
  ];
    return(
        <section className="grid  md:grid-cols-12 bg-gray-200  py-5">
        <div className="hidden sm:hidden md:block md:col-span-3 py-4 px-2">
            <h1 className="flex items-center text-xl gap-2">
            <CircleUserRound size={40} className="text-gray-600" strokeWidth={0.8} />  {params.nome}
            </h1>
            <ul>
                {links.map((produto, index)=><li className=" p-2 my-4 rounded-lg" key={index}>
                    <Link className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-md rounded-md  hover:bg-blue-300  hover:rounded-lg',
                    {
                        'bg-blue-500 text-white':produto.name==='Notificações'
                    })
                    } href={produto.href}  >
                 {produto.icone}   
                     
                     {produto.name}</Link></li>)}
            </ul>

        </div>
        <BunnerU>
        <div className="flex justify-center " >
        <PicUser src='/gelsondevelop.JPG' />
               
                </div>
        
        <p className="text-center text-xl  my-2 font-bold">{params.nome}</p>
        <article className="text-center">
            " Vendas de Fruta, vegetais à grandes quantidades "
    </article>
    <div className="text-center my-2">
    <Link href='#' className='mt-2 md:mx-0 bg-white mx-auto text-black shadow hover:brightness-90 rounded-lg p-2'>
    Actualizar Dados
  </Link>
    </div>
    

        </BunnerU>
        <div className=" px-2 py-3  md:col-span-3">
                    <Notification props={2} />

        </div>
        
        
        </section>
    )
}