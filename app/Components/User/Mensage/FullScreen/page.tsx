"use client"
import { ReactNode, useState } from "react";
import { HeaderMenssageF } from "./header";
import { mensagem, mensagemS } from "../page";
import { Paragrath } from "@/app/Components/Header/User/link";
import { ContainerMensage } from "../ContainerMensage";
import { ButtonMensage } from "../button";
import AutoExpandingTextarea from "../textarea";
import { SendIcon } from "lucide-react";
import { PagrathMensage } from "../paragraphMenssage";
import { NotMenssage } from "./notMensage";

export default function MenssageFullScreen({children}:{children:ReactNode}){
    const [texto, setTexto]=useState<{[key:number]:string}>({})

    const [mensagemSelecionda, setMensagemSelecionada]=useState<mensagemS| null>()
  
    function handleChangeInput(userId:number, value:string){
        setTexto((prevText)=>({...prevText, [userId]:value}))
    }
    function handleClick(mensagem:mensagemS){
        setMensagemSelecionada(mensagem)


    }
    return(
        <>
        <main className="hidden md:block relative h-screen">
        <HeaderMenssageF/>
        <section className=" grid  md:grid-cols-12 bg-gray-100  ">
            <div className=" shadow-lg md:col-span-5 py-4 px-2 border-e border-gray-300">
                <ul>
                
                    {mensagem.map((m)=> 
                    <li className="cursor-pointer shadow-sm bg-gray-200 p-2 my-4 text-gray-900 rounded-lg" key={m.nome}
                        onClick={()=>handleClick(m)}
                    >
                        {m.nome}
                        <Paragrath>{m.mensage[0]}</Paragrath>
                   </li>)}
             
              </ul>

            </div>
            <div className=" md:col-span-7   h-screen">
            {mensagemSelecionda?
            <div className="p-5">
             
                <h1 className="text-lg font bold mb-8">{mensagemSelecionda.nome}</h1>
                
                <p>{mensagemSelecionda.mensage.map((p,i)=><PagrathMensage key={i}>{p}</PagrathMensage>)}</p>
       
                <ContainerMensage>
                <AutoExpandingTextarea className="mb-4" />
                 
                    <ButtonMensage type="submit"><SendIcon className="text-sky-500" /></ButtonMensage>

                </ContainerMensage>
                
                </div>: 
                <NotMenssage>
                <h1 className="md:text-lg font-semibold uppercase text-center p-5">Busque pelo nome e depois clica no nome <br/> ou simplesmente clique  no  nome de alguém,<br/> para que possam bater-um-papo!</h1>
                </NotMenssage>
                }
             

                
            </div>
        </section> 
        </main>
   
        </>
    )
}