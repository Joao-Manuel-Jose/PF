"use client"

import { ButtonG } from "@/app/Components/Global/button"
import { Form } from "@/app/Components/Global/form"
import { InputG } from "@/app/Components/Global/input"

import { ContentOfcanvas, MycontentOfcanvas} from "@/app/Components/Header/User/contentOfcanvas"
import { ButtonLink } from "@/app/Components/Header/User/link"
import { UserNav, linksIcon } from "@/app/Components/Header/User/navbar"
import { Modal } from "@/app/Components/User/Modal/page"
import { UserNMycontentOfcanvas } from "@/app/Components/User/NUser/contentOfCanvas"
import { BunnerU } from "@/app/Components/User/bunner"
import { PicUser } from "@/app/Components/User/fto"
import { clsx } from "clsx"
import { Search } from "lucide-react"
import Link from "next/link"

import { useState } from "react"



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
        { name: ' Perfil',  componente:null },
        {
          name: ' Produtoras',
          href: '#',
          
          componente:null
        
        },
        { name: ' Fazendas',  componente:<Modal isOpen={componenteOfcanvas} onClose={onClose}>ss</Modal>} ,
        {name:'Transportadoras', href:'#',  componente:<Modal isOpen={componenteOfcanvas} onClose={onClose}>ss</Modal>},
        {name:'Compradores',  componente:null},
        {name:'Facturas',componente:null},
        {name:'Comprados', componente:null},
        {name:'Sair',href:'/', componente:null}
    ]
    
      


    return(
        <>
        {console.log(componenteOfcanvas)}
        <UserNav  data={UserNMycontentOfcanvas}>
        {linksIcon.map((link,index)=>{
                            return(
                                <ButtonLink href={link.href1} key={index} 
                                onClick={()=>{handleClick(link.name)}} >{link.icone}
                                   
                                </ButtonLink>
                            )
         })}

        </UserNav>
        <section className="grid  md:grid-cols-12 bg-gray-200  py-5">
        <div className="hidden sm:hidden md:block md:col-span-3 py-4 px-2">
            <ContentOfcanvas nome={params.nome}>
                {UserNMycontentOfcanvas.map((Content, index)=>(
                    <li className=" p-2 my-4 rounded-lg" key={index}>
                    <Link className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-md rounded-md  hover:bg-blue-300  hover:rounded-lg',
                    {
                        'bg-blue-500 text-white':Content.name===componenteOfcanvas
                    })
                    } href="#" onClick={()=>handleClickOfcanvas(Content.name)}>
                 {Content.icone}   

                
                     
                     {Content.name}</Link></li>))}



            </ContentOfcanvas>
            
        </div>
        <BunnerU>
        <p className="text-center ">Pesquisar produtos</p>
            <Form>
          
               
                <InputG  type="text"  placeholder="Buscar..." id="search" />
                <ButtonG type="submit"><Search className="text-sky-300"/></ButtonG>
                
            </Form>
       
        
   
    <div className="text-center my-2">

    </div>
    

        </BunnerU>
        <div className=" px-2 py-3  md:col-span-3">
        {componenteselecionado ?
             linksIcon.filter((component)=>component.name===componenteselecionado)
             .map(c=>c.componente):
             linksIcon[0].componente
             }
        </div>
       
          
        
        
        </section>
        <div>
        {componenteOfcanvas&&
            UserNMycontentOfcanvasModal.filter((component)=>component.name===componenteOfcanvas).map(c=>c.componente)
            
                }
        </div>
        {console.log(componenteOfcanvas)}
        </>

    )
}