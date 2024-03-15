"use client"
import { UserNav,linksIcon } from "@/app/Components/Header/User/navbar";
import { BunnerU } from "@/app/Components/User/bunner"
import { PicUser } from "@/app/Components/User/fto"
import clsx from "clsx"
import { ContentOfcanvas,MycontentOfcanvas } from "@/app/Components/Header/User/contentOfcanvas"
import Link from "next/link"
import {  Suspense, useEffect, useState } from "react"
import { ButtonLink } from "@/app/Components/Header/User/link";
import { api, useAuth } from "@/app/(User)/user";
import { LinkG } from "@/app/Components/Global/link";
import ModalCadProduto from "./Modal/CadastroProduto/page";
import ModalPerfil from "./Modal/Perfil/page";
import ModalProduct from "./Modal/Produtos/page";
import { CardCProduct } from "@/app/Components/Products";
import { ButtonProduct } from "@/app/Components/Products/button";
import ModalPayment from "./Modal/Payment/page";
import { ProductRes, Produto } from "../../NUser/page";
import { BeatLoader, PuffLoader } from "react-spinners";

export default function User({params}:{
    params:{
        nome:string
    }
}){ 
    const {foto,user,logout}=useAuth()
    const [produto, setProduto]=useState<Produto[]>([])
    const [noProduts,setNoProducts]=useState<string| null>(null)
    
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
     {name: 'Produtos',  
    componente:<ModalProduct isOpen={componenteOfcanvas}
     onClose={onClose}/>},
     {name: 'Pagamento',  
     componente:<ModalPayment isOpen={componenteOfcanvas} onClose={onClose}/>},
    
      

]
useEffect(() => {
    const fetchData = async () => {
        
      try {
        if(user?.id){
        const response = await fetch(`${api}/fazenda/recentProduct/${user?.id}`);
        const my = await response.json();
  
        
        console.log(my)
  
        // Se estiver na primeira página, redefine o estado
       
           setProduto(my.map((p: ProductRes) => ({
            nome:String(p.produto.nome),
            descricao:String(p.produto.descricao),
            preco:Number(p.produto.preco),
            qualidade:Number(p.produto.qualidade),
            quantidade:Number(p.quantidade),
            quantidadeS:Number(p.produto.quantidadeS),
            foto:p.produto.foto,
            id:Number(p.produto.id),
            data_caducidade:p.produto.data_caducidade,
            categoria:String(p.produto.categoria),
            
 
            
               
              })));

        
            }
            else setNoProducts('Sem produtos')
  
      } catch (error) {
        setNoProducts('Sem produtos')
        
      }
    };
  
setTimeout(()=>fetchData(),300)    
   
    console.log('teste',produto)
  }, [produto, user?.id]);    
  if(user){
      
    return(
        
        <>
        <UserNav data={MycontentOfcanvas} href={`/User/${user.type}`}>
        {linksIcon.map((link,index)=>{
                            return(
                                <ButtonLink href={link.href1} key={index}
                                onClick={()=>{handleClick(link.name)}} >{link.icone}
                                   
                                </ButtonLink>
                            )
         })}

        </UserNav>
      
        <section className="relative grid  md:grid-cols-12 bg-gray-200  py-0">
            <div className=" hidden  sm:hidden md:block mt-1 rounded-md md:col-span-3 py-1 px-2 shadow-sm bg-gray-100 ">
            
                    <ContentOfcanvas nome={user.nomeGestor}>
                        
                        {MycontentOfcanvas.map((Content, index)=>(
                            <li className=" py-2 my-2 rounded-lg" key={index}>
                            {Content.name=='Sair'?
                            
                            <Link className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-sm text-sm border-b border-gray-300 rounded-md  hover:bg-sky-100   hover:text-sky-600',
                            {
                                'font-normal':Content.name=='Sair'
                            })
                            } onClick={logout} href={Content.href} >
                                {Content.icone}   
                            
                                {Content.name}
                                </Link>
                            :<Link className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-sm text-sm border-b border-gray-300 rounded-md  hover:bg-sky-100   hover:text-sky-600',
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
                <PicUser src={`http://localhost:4000/${foto}`} />
                
               
            </div>
        
            <p className="text-center text-xl  my-2 font-bold">{user?.nome} </p>
            <article className="text-center sm:text-sm md:text-md font-normal">
            {user.descricao}
            </article>
            <div className="text-center my-2 px-5">
                    <Link href={`${user.nome}/Upgrade/Dados/`} className="bg-white shadow  p-2 px-4 text-sm rounded-xl ">Actualizar perfil</Link>
             </div>
             </section>
            
             <section className="mt-2 bg-gray-100 shadow-sm w-full py-5 p-2  rounded-xl">
            <div className="flex justify-center " >
                
                
               
            </div>
        
            <p className="text-center text-lg  my-2 font-semibold">Produtos recentes </p>
            <section className=" grid grid-cols-2 bg-gray-50 p-2 md:grid-cols-3 gap-2 rounded md:gap-1">
            <Suspense fallback={<p className="text-red-500">A carregar...</p>}>
                
                {produto.length>0? produto.map(p=>(
          
            <CardCProduct preco={p.preco?p.preco:0} name={p.nome} foto={`${api}/${p.foto}`} id={p.id?p.id:0} key={p.id}>
              
                <ButtonProduct color="bg-orange-400">Recente</ButtonProduct>
            </CardCProduct>
        

        )):noProduts!==null?
        <p className="text-center">SEM PRODUTOS</p>:<>
        <PuffLoader/>
        </>
                }
       </Suspense>
    </section>
    
    </section>
                        

        </BunnerU>
        <div className="relative hidden md:block px-2 py-3  md:col-span-3">
        <div className="sticky top-0 bottom-0">                {componenteselecionado ?
                    linksIcon.filter((component)=>component.name===componenteselecionado)
                    .map(c=>
                        <div key={c.name}>{
                        c.componente

                        }
                        </div>
                        )

                    :linksIcon[0].componente
                
                    }
            </div>

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