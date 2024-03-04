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
import { LogOutIcon, PowerSquareIcon, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { LinkG } from "@/app/Components/Global/link"
import { UserNavN, linksIconN } from "@/app/Components/Header/User/navbar2"
import { CardBuy } from "@/app/Components/User/NUser/cardBuy"
import SideNavUser from "@/app/Components/User/sidenav"
import { SideNavUserNav } from "@/app/Components/User/NUser/Navsidenav"
import { useAuth } from "../../user"



export default function UesrN(){
    const {client,logout}=useAuth()
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
    
      


    return(
        client?.token?
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
        <section className="grid grid-cols-1   md:grid-cols-12 bg-gray-200  py-">
        <div className="hidden md:block md:col-span-3  ">
           <SideNavUser gestor={<p>{client.nome}</p>} link="Sair" homeLink="/User/NUser">
            <SideNavUserNav/>
            <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
       
       <Link  className="flex h-[48px] w-full  items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href='/' onClick={logout} >
         <LogOutIcon strokeWidth={1.2} className="w-6" />
         Sair
       </Link>

           </SideNavUser>
        </div>
      {/*  <div className="relative hidden sm:hidden md:block mt-1 rounded-md md:col-span-3 py-2 px-2 shadow-sm bg-gray-50">
            <ContentOfcanvas nome={'tt'}>
                {UserNMycontentOfcanvas.map((Content, index)=>(
                    <li className=" p-2 my-4  rounded-lg" key={index}>
                    <Link className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-sm text-sm border-b border-gray-300 rounded-md  hover:bg-blue-300   hover:rounded-lg',
                    {
                        'bg-blue-500 text-white':Content.name===componenteOfcanvas
                    })
                    } href="#" >
                 {Content.icone}   

                
                     
                     {Content.name}</Link></li>))}



            </ContentOfcanvas>
            
                </div>*/}
        <section className="col-span-6 mx-0 px-0 sm:px-2">
        <div className="mb-1 p-3 sm:p-4 shadow sm:shadow-none bg-gray-50 sm:bg-transparent rounded-none sm:rounded-xl">
            <p className="px-6 sm:text-center md:text-start text-sm ">Pesquisar produtos</p>
            <Form>
          
               
                <InputG  type="text"  placeholder="Buscar..." id="search"  />
                <button type="submit"><Search className="text-sky-300 h-5"/></button>
                
            </Form>
            </div>
        <section className="bg-gray-100 shadow-sm w-auto md:w-full  p-2 rounded-xl mx-0">
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
    

        </section >
        <div className="hidden sm:block px-2 py-3  md:col-span-3 ">
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
     
      
        </>:<>
        <p>Erro</p>
        
        </>

    )
}