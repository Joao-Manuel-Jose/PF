"use client"
import { Form } from "@/app/Components/Global/form"
import { InputG } from "@/app/Components/Global/input"

import { ContentOfcanvas, MycontentOfcanvas} from "@/app/Components/Header/User/contentOfcanvas"
import { ButtonLink } from "@/app/Components/Header/User/link"

import { UserNMycontentOfcanvas } from "@/app/Components/User/NUser/contentOfCanvas"
import { BunnerU } from "@/app/Components/User/bunner"
import { PicUser } from "@/app/Components/User/fto"

import { LogOutIcon, Search } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { UserNavN, linksIconN } from "@/app/Components/Header/User/navbar2"
import { CardBuy } from "@/app/Components/User/NUser/cardBuy"
import SideNavUser from "@/app/Components/User/sidenav"
import { SideNavUserNav } from "@/app/Components/User/NUser/Navsidenav"
import { api, useAuth } from "../../user"
import { ProductData } from "../(Fazenda)/[nome]/Modal/CadastroProduto/page"
import { RecenteProduct } from "@/app/api/Comprador/product/route"
import Image from "next/image"
import { ButtonPf } from "@/app/Components/User/Modal/button"
import { CardCProduct } from "@/app/Components/Products"
import { ButtonProduct } from "@/app/Components/Products/button"
import { ClipLoader, RotateLoader } from "react-spinners"

export interface Produto extends ProductData{
  id_e:number
  nome_e:string
}
export interface ProductRes{
  quantidade:number
  produto:ProductData
  id_fazenda:number
  fazenda:{
    nome:string
    
  }
}

export default function UesrN(){
    const {client,logout}=useAuth()
    const [produto, setProduto]=useState<Produto[]>([])
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
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${api}/client/recentProduct`);
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
              foto:null,
              id:Number(p.produto.id),
              data_caducidade:p.produto.data_caducidade,
              categoria:String(p.produto.categoria),
              id_e:Number(p.id_fazenda),
              nome_e:p.fazenda.nome,fto:p.produto.foto,
                 
                })));

          
    
    
        } catch (error) {
          alert('Erro ao obter os produtos.');
        }
      };
    
      setTimeout(fetchData,600);
     
      console.log('teste',produto)
    }, []);
    useEffect(()=>{
      /*async function buscar() {
        try{
          const response = await fetch(`${api}/client/recentProduct`);
          const my = await response.json();
          
          const responseBodyArray = JSON.parse(my);
          console.log('teste',responseBodyArray)
          if(responseBodyArray){
            setProduo(
              (prev)=>({
                ...prev,
                nome:String(responseBodyArray.produto.nome),
                descricao:String(responseBodyArray.produto.descricao),
                preco:Number(responseBodyArray.produto.preco),
                qualidade:Number(responseBodyArray.produto.qualidade),
                quantidade:Number(responseBodyArray.quantidade),
                quantidadeS:Number(responseBodyArray.produto.quantidadeS),
                foto:null,
                id:Number(responseBodyArray.id),
                data_caducidade:new Date(),
                categoria:String(responseBodyArray.produto.categoria),
                id_e:Number(responseBodyArray.fazenda.id),
                nome_e:responseBodyArray.fazenda.nome,fto:responseBodyArray.produto.nome,
                
              })
            )
          }
        
        
        
      }catch(error){
        console.log(error)
      }

    
    }*/

          
          


      }  ,[])
    
      


    return(
        client?.token?
        <>
        {console.log(componenteOfcanvas)}
        <UserNavN  data={UserNMycontentOfcanvas} href={`/User/NUser/`}>
        {linksIconN.map((link,index)=>{
                            return(
                                <ButtonLink href={link.href1} key={index} 
                                onClick={()=>{handleClick(link.name)}} >{link.icone}
                                   
                                </ButtonLink>
                            )
         })}

        </UserNavN>
        <section className="grid grid-cols-1   md:grid-cols-12 bg-gray-200  py-">
        <div className="hidden md:block md:col-span-3 md:h-screen  ">
           <SideNavUser gestor={<p>{client.nome}</p>} link="Sair" homeLink="/User/NUser">
            <SideNavUserNav/>
            <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
       
       <Link  className="flex h-[48px] w-full  items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href='/' onClick={logout} >
         <LogOutIcon strokeWidth={1.2} className="w-6" />
         Sair
       </Link>

           </SideNavUser>
        </div>
        <section className="col-span-6 mx-0 py-2 px-0 sm:px-2">
        <div className="mb-2 px-2  shadow sm:shadow-none bg-gray-50 sm:bg-transparent rounded-none sm:rounded-xl">
            
            <Form>
          
               
                <InputG  type="text"  placeholder="Buscar produto" id="search"  />
                <button type="submit"><Search className="text-sky-300 h-5"/></button>
                
            </Form>
            </div>
       
    {/*<section className="bg-gray-100 shadow-sm w-auto md:w-full  p-2 rounded-xl mx-0">
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
        </section>*/}
            
       
       
        
   
    <div className="text-center my-2">
      <h1 className="font-sebibold">Produtos que podem te interessar</h1>
      <section className=" grid grid-cols-2 bg-gray-50 p-2 md:grid-cols-3 gap-2 rounded md:gap-1">
        {produto.length>0 ?produto.map(p=>(
          <CardCProduct preco={p.preco?p.preco:0} name={p.nome} foto={`${api}/${p.fto}`} id={p.id?p.id:0} key={p.id}>
            <ButtonProduct color="bg-orange-300">Comprar</ButtonProduct>
          </CardCProduct>

        )):
        <ClipLoader/>
      }
    </section>
    </div>
    

        </section >
        <div className="hidden sm:block px-1 my-2 md:col-span-3  ">

           
            {componenteselecionado ? (
  <>
    
    {linksIconN
      .filter((component) => component.name === componenteselecionado)
      .map((c, i) => {
        if (c.name === 'Carrinho' || c.name=='') {
          return (
            <div key={i} className="">
              <CardBuy />
            </div>
          );
        } else {
          return (
            <div key={i} className=" ">
              {c.componente}
            </div>
          );
        }
      })}
  </>
):
<div  className="">
<CardBuy />
</div>
}

        </div>
       

       
          
        
        
        </section>
     
      
        </>:<>
        <p>Erro</p>
        
        </>

    )
}