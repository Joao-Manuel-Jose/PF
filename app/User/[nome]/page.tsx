import { Linka } from "@/app/Components/Header/link"
import { BunnerU } from "@/app/Components/User/bunner"
import { PicUser } from "@/app/Components/User/fto"
import { Bell, GitPullRequestIcon, Home, LogOut } from "lucide-react"
import Link from "next/link"

export default function User({params}:{
    params:{
        nome:string
    }
}){   const links = [
    { name: 'Mensagens ', href: '#' },
    { name: 'inserir Produto', href: '#' },
    {
      name: 'Visualizar Produtos',
      href: '#',
    
    },
    { name: 'Gerar Relatório', href: '#'},
    {name:'Editar Produto', href:'#'},
    {name:'Promover produto',href:'#'},
    {name:'Vericar Rendimento',href:'#'},
    {name:'Sair',href:'/'}
  ];
    return(
        <section className="grid md:grid-cols-12 bg-gray-200">
        <div className="md:col-span-3 py-4 px-2 bg-white">
            <h1 className="text-xl font-semibold ">
                Dahboard
            </h1>
            <ul>
                {links.map((produto, index)=><li className="bg-gray-200 p-2 my-4 rounded-lg" key={index}>
                    <Link className="flex items-center justyfy-center"
                     href={produto.href}  >
                        {produto.name==='Sair'?<LogOut/>:
                     <Home/>
                     }{produto.name}</Link></li>)}
            </ul>

        </div>
        <BunnerU>
        <div className="flex justify-center">
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
        <h1 className="flex text-xl font-semibold ">
            <Bell className="text-blue-500"/> Noticações
            </h1>
            <div>
                <ul>
                    <li className="bg-gray-100 p-2 my-4 rounded-lg">
                        Adicionar conta visa
                    </li>
                    <li className="bg-gray-100 p-2 my-4 rounded-lg">
                        500 caixas de Manga solicitada para Luanda
                    </li>
                    <li className="bg-gray-100 p-2 my-4 rounded-lg">
                       TRACK_transportadora disponível para entrega
                    </li>
                    <li className="bg-gray-100 p-2 my-4 rounded-lg">
                       Fertilizantes em pendente
                    </li>
                    <li className="bg-blue-200 p-2 my-4 rounded-lg">
                       1.000.000,00 kz transferidos por <a href="#">Tchivala</a>
                    </li>
                    <li className="bg-gray-100 p-2 my-4 rounded-lg">
                      Solicitação de 40 toneladas de feijão Makundi, por Joana Pereira
                    </li>
                </ul>
            </div>

        </div>
        
        </section>
    )
}