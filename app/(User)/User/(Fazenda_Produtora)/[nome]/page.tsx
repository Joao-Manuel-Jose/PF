"use client"

import { UserNav,linksIcon } from "@/app/Components/Header/User/navbar";
import { BunnerU } from "@/app/Components/User/bunner"
import { PicUser } from "@/app/Components/User/fto"
import clsx from "clsx"
import { ContentOfcanvas,MycontentOfcanvas } from "@/app/Components/Header/User/contentOfcanvas"


import Link from "next/link"

import { ReactNode, useState } from "react"
import { ButtonLink } from "@/app/Components/Header/User/link";
import { useAuth } from "@/app/(User)/user";

export default function User({params}:{
    params:{
        nome:string
    }
}){ 
    const {token,user}=useAuth()
    const [componenteselecionado, setComponenteSelecionado]=useState<string | null>(null)
    const handleClick=(nomeComponente:string)=>{
        setTimeout(()=>{
            setComponenteSelecionado(nomeComponente)
        },100)
      

    }
    if(token){
        console.log(token)
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
        <section className="grid  md:grid-cols-12 bg-gray-200  py-5">
        <div className="hidden sm:hidden md:block md:col-span-3 py-4 px-2">
            <ContentOfcanvas nome={user?.name}>
                
                {MycontentOfcanvas.map((Content, index)=>(
                    <li className=" p-2 my-4 rounded-lg" key={index}>
                    <Link className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-md rounded-md  hover:bg-blue-300  hover:rounded-lg',
                    {
                        'bg-blue-500 text-white':Content.name==' Inserir produto '
                    })
                    } href={Content.href} >
                 {Content.icone}   
                     
                     {Content.name}</Link></li>))}



            </ContentOfcanvas>
        </div>
        <BunnerU>
        <div className="flex justify-center " >
        <PicUser src='/gelsondevelop.JPG' />
               
                </div>
        
        <p className="text-center text-xl  my-2 font-bold">{user?.email}{user?.name}</p>
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
        {componenteselecionado &&
             linksIcon.filter((component)=>component.name===componenteselecionado)
             .map(c=>c.componente)
         
             }
        </div>
          
        
        
        </section>
        
        </>
    )
    }
}