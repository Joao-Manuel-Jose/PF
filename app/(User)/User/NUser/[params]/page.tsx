"use client"
import { Form } from "@/app/Components/Global/form"
import { InputG } from "@/app/Components/Global/input"

import { ContentOfcanvas, MycontentOfcanvas} from "@/app/Components/Header/User/contentOfcanvas"
import { ButtonLink } from "@/app/Components/Header/User/link"
import { UserNav} from "@/app/Components/Header/User/navbar"
import { UserNMycontentOfcanvas } from "@/app/Components/User/NUser/contentOfCanvas"
import { BunnerU } from "@/app/Components/User/bunner"
import { PicUser } from "@/app/Components/User/fto"
import { clsx } from "clsx"
import { Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ModalFazenda from "./modal/Fazenda/page"
import ModalTransportadora from "./modal/Transportadora/page"
import ModalPerfil from "./modal/perfil/page"
import ModalCompradores from "./modal/compradores/page"
import ModalProdutoras from "./modal/Produtoras/page"
import { LinkG } from "@/app/Components/Global/link"
import { UserNavN, linksIconN } from "@/app/Components/Header/User/navbar2"
import { CardBuy } from "@/app/Components/User/NUser/cardBuy"



export default function UesrN(params:{
    nome:string
}){
    
    const [componenteOfcanvas, setComponenteOfcanvas]=useState<string | null>(null)
    const handleClickOfcanvas=(nomeComponente:string)=>{
       
            setComponenteOfcanvas(nomeComponente)
       
      

    }
    const onClose=()=>{
       
        setComponenteOfcanvas(null)
   
  

}
    const [componenteselecionado, setComponenteSelecionado]=useState<string | null>(null)
    const handleClick=(nomeComponente:string)=>{
        setTimeout(()=>{
            setComponenteSelecionado(nomeComponente)
        },100)
      

    }
     const UserNMycontentOfcanvasModal=[
        { name: ' Perfil',  componente:<ModalPerfil isOpen={componenteOfcanvas
        } onClose={onClose}/> },
        {
          name: ' Produtoras',
          href: '#',
          
          componente:<ModalProdutoras isOpen={componenteOfcanvas} onClose={onClose}/>
        
        },
        { name: ' Fazendas',  componente:<ModalFazenda  isOpen={componenteOfcanvas} onClose={onClose}/>} ,
        {name:'Transportadoras',  componente:<ModalTransportadora  isOpen={componenteOfcanvas} onClose={onClose}/>},
        {name:'Compradores',  componente:<ModalCompradores isOpen={componenteOfcanvas} onClose={onClose}/>},
        {name:'Facturas',componente:null},
        {name:'Comprados', componente:null},
        {name:'Sair',href:'/', componente:null}
    ]
    
      


    return(
        <>
        {console.log(componenteOfcanvas)}
        <UserNavN  data={UserNMycontentOfcanvas}>
        {linksIconN.map((link,index)=>{
                            return(
                                <ButtonLink href={link.href1} key={index} 
                                onClick={()=>{handleClick(link.name)}} >{link.icone}
                                   
                                </ButtonLink>
                            )
         })}

        </UserNavN>
        <section className="grid  md:grid-cols-12 bg-gray-200  py-">
        <div className="relative hidden sm:hidden md:block mt-1 rounded-md md:col-span-3 py-2 px-2 shadow-sm bg-gray-50">
            <ContentOfcanvas nome={params.nome}>
                {UserNMycontentOfcanvas.map((Content, index)=>(
                    <li className=" p-2 my-4  rounded-lg" key={index}>
                    <Link className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-sm text-sm border-b border-gray-300 rounded-md  hover:bg-blue-300   hover:rounded-lg',
                    {
                        'bg-blue-500 text-white':Content.name===componenteOfcanvas
                    })
                    } href="#" onClick={()=>handleClickOfcanvas(Content.name)}>
                 {Content.icone}   

                
                     
                     {Content.name}</Link></li>))}



            </ContentOfcanvas>
            
        </div>
        <BunnerU>
        <div className="mb-2 p-3 sm:p-0 shadow sm:shadow-none bg-gray-50 sm:bg-transparent rounded-none sm:rounded-xl">
            <p className="px-6 sm:text-center md:text-start text-sm ">Pesquisar produtos</p>
            <Form>
          
               
                <InputG  type="text"  placeholder="Buscar..." id="search"  />
                <button type="submit"><Search className="text-sky-300 h-5"/></button>
                
            </Form>
            </div>
        <section className="bg-gray-100 shadow-sm w-full  p-2 rounded-xl">
            <div className="flex justify-center " >
                <PicUser src={`/girl.png`} />
                
               
            </div>
        
            
            <article className="text-center text-xs sm:text-sm md:text-md font-normal">
                    Busque e compre produtos agricolas e derivados,<br/>
                     sem precisar sair do conforto do seu lar,<br /> disponível em toda Angola!
             
            </article>
            <div className="text-center my-2 px-5">
                    <LinkG href="#" color="bg-sky-300">Facilita a tua vida</LinkG>
             </div>
             </section>
            
       
       
        
   
    <div className="text-center my-2">

    </div>
    

        </BunnerU>
        <div className="hidden sm:block px-2 py-3  md:col-span-3">
        {componenteselecionado ?
             linksIconN.filter((component)=>component.name===componenteselecionado)
             .map((c,i)=>{
                if(c.name==='Carrinho'){
                return <div key={i}><CardBuy/></div> 
             }
             else
             return c.componente
            }):
           <CardBuy/>
           
             }
        </div>
       
          
        
        
        </section>
        <div>
        {componenteOfcanvas&&
            UserNMycontentOfcanvasModal.filter((component)=>component.name===componenteOfcanvas).map(c=>c.componente)
            
                }
        </div>
      
        </>

    )
}