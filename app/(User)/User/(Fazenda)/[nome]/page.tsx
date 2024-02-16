"use client"
import { UserNav,linksIcon } from "@/app/Components/Header/User/navbar";
import { BunnerU } from "@/app/Components/User/bunner"
import { PicUser } from "@/app/Components/User/fto"
import clsx from "clsx"
import { ContentOfcanvas,MycontentOfcanvas } from "@/app/Components/Header/User/contentOfcanvas"
import Link from "next/link"
import {  useState } from "react"
import { ButtonLink } from "@/app/Components/Header/User/link";
import { useAuth } from "@/app/(User)/user";
import { LinkG } from "@/app/Components/Global/link";
import ModalCadProduto from "./Modal/CadastroProduto/page";
import ModalPerfil from "./Modal/Perfil/page";
import ModalProduct from "./Modal/Produtos/page";
export default function User({params}:{
    params:{
        nome:string
    }
}){ 
    const {token,user,logout}=useAuth()
    const [componenteselecionado, setComponenteSelecionado]=useState<string | null>(null)
    const handleClick=(nomeComponente:string)=>{
        setTimeout(()=>{
            setComponenteSelecionado(nomeComponente)
        },100)
    }
    const [componenteOfcanvas, setComponenteOfcanvas]=useState<string | null>(null)
    const handleClickOfcanvas=(nomeComponente:string)=>{
       setComponenteOfcanvas(nomeComponente)
       }
    const onClose=()=>{
       setComponenteOfcanvas(null)
   }
   const UserNMycontentOfcanvasModal=[
    { name: 'Inserir Produto',  
    componente:<ModalCadProduto isOpen={componenteOfcanvas}
     onClose={onClose}/> },
    {name: 'Perfil',  
    componente:<ModalPerfil isOpen={componenteOfcanvas}
     onClose={onClose}/>},
     {name: 'Visualizar Produtos',  
    componente:<ModalProduct isOpen={componenteOfcanvas}
     onClose={onClose}/>},
    
      

]
    if(user?.nome){
      
    return(
        
        <>
        <UserNav data={MycontentOfcanvas}>
        {linksIcon.map((link,index)=>{
                            return(
                                <ButtonLink href={link.href1} key={index}
                                onClick={()=>{handleClick(link.name)}} >{link.icone}
                                   
                                </ButtonLink>
                            )
         })}

        </UserNav>
        <section className="grid  md:grid-cols-12 bg-gray-200  py-0">
            <div className="relative hidden sm:hidden md:block mt-1 rounded-md md:col-span-3 py-2 px-2 shadow-sm bg-gray-100">
            
                    <ContentOfcanvas nome={user.nomeGestor}>
                        
                        {MycontentOfcanvas.map((Content, index)=>(
                            <li className=" py-2 my-2 rounded-lg" key={index}>
                            {Content.name=='Sair'?
                            <Link className={clsx('absolute bottom-1 p-2 flex items-center text-md justyfy-center   rounded-md w-[90%]  hover:bg-blue-300   hover:rounded-lg',
                            {
                                'font-normal':Content.name=='Sair'
                            })
                            } onClick={logout} href={Content.href} >
                                {Content.icone}   
                            
                                {Content.name}
                                </Link>
                            :<Link className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-sm text-sm border-b border-gray-300 rounded-md  hover:bg-blue-300   hover:rounded-lg',
                            {
                                'bg-sky-300 text-white':Content.name==componenteOfcanvas
                            })
                            } href={Content.href} onClick={()=>handleClickOfcanvas(Content.name)}>
                                {Content.icone}   
                            
                                {Content.name}
                                </Link>}</li>))
                        }



                    </ContentOfcanvas>
            </div>
        <BunnerU>
            <section className="bg-gray-100 shadow-sm w-full  p-2 rounded-xl">
            <div className="flex justify-center " >
                <PicUser src={`http://localhost:4000/${user.fto}`} />
                
               
            </div>
        
            <p className="text-center text-xl  my-2 font-bold">{user?.nome} </p>
            <article className="text-center sm:text-sm md:text-md font-normal">
             Vendas de Fruta, vegetais à grandes quantidades 
            </article>
            <div className="text-center my-2 px-5">
                    <LinkG href="#" color="bg-sky-300">Actualizar perfil</LinkG>
             </div>
             </section>
    

        </BunnerU>
        <div className="hidden md:block px-2 py-3  md:col-span-3">
                {componenteselecionado ?
                    linksIcon.filter((component)=>component.name===componenteselecionado)
                    .map(c=>c.componente)

                    :linksIcon[0].componente
                
                    }
        </div>
          
        
        
    </section>
    <div>
    {componenteOfcanvas&&
            UserNMycontentOfcanvasModal.filter((component)=>component.name===componenteOfcanvas).map((c,index)=><div key={index}>{c.componente}</div>)
            
                }
    </div>
        
        </>
    )
    }
}