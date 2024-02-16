import { ExpandIcon, FileAudioIcon, ImageIcon, ReceiptIcon, Search, SendHorizonalIcon, SendIcon, X } from "lucide-react"
import { Paragrath } from "../../Header/User/link"
import { FormEvent, useState } from "react"
import { PagrathMensage } from "./paragraphMenssage"
import { ContainerMensage } from "./ContainerMensage"

import { ButtonMensage } from "./button"
import AutoExpandingTextarea from "./textarea"
import { HeaderCompont } from "../../Global/header_component"
import Link from "next/link"
import InputComponent from "./container_bootom"
import { MensagemInput } from "./mensagemInput"
import { ButtonG } from "../../Global/button"
import { Form } from "../../Global/form"
import { InputG } from "../../Global/input"
export interface mensagemS{
    id:number,
    nome:string,
    mensage:string[],
}
export  const mensagem=[
    {
        id:1,
        nome:'Gelson',
        mensage:[
            
            'Transferencia feita',
            '200mil kz',
            'Feita'
        ]},
        {
            id:2,
            nome:'Donilson',
            mensage:[
            
                '5000 toneladas de milho solicitadas',
                '900mil kz transferido'
            ]},
        
]

export default function Mensage (){
    const [messages, setMessages] = useState<string[]>([]);

    const handleSendMessage = (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    const [texto, setTexto]=useState<{[key:number]:string}>({})

    const [mensagemSelecionda, setMensagemSelecionada]=useState<mensagemS| null>()
  
    function handleChangeInput(userId:number, value:string){
        setTexto((prevText)=>({...prevText, [userId]:value}))
    }
    function handleClick(mensagem:mensagemS){
        setMensagemSelecionada(mensagem)


    }
    
    return(
      
      
        <div className="relative shadow-md bg-gray-50  rounded-lg">
        {
            mensagemSelecionda?
            <>
            <div className="stick top-0 bg-gray-50 rounded-md border-b border-gray-300 z-50 shadow-sm px-0   md:py-4  grid grid-cols-2 items-center">
                
                <h1 className="ps-2 text-lg  uppercase  font-semibold md:text-sm xl:text-xl">
                 {mensagemSelecionda.nome}
             </h1> 
                <X className="cursor-pointer text-sky ms-auto text-red-500" width={36}  onClick={()=>setMensagemSelecionada(null)} />
                
                
              
              </div>
    
                <div className=" ">
                    <div className="p-4 grid gap-6">
                {mensagemSelecionda.mensage.map((p,i)=><PagrathMensage key={i}>{p}</PagrathMensage>)}
                </div>
            
               <ContainerMensage>
                    <AutoExpandingTextarea/>
                    {
                        texto && <ImageIcon className="h-8 text-sky-500"/>
                    }
                    
                    <ButtonMensage><SendHorizonalIcon className="text-sky-400"/></ButtonMensage>
                   
                   
               </ContainerMensage>
            

               </div>
               
                </>
                :
            <>
                <div className="bg-gray-50 rounded-md border-b border-gray-300 z-50 shadow-sm p-4 md:p-4 ">
                <Link className="hidden md:block text-center" href="/Components/User/Mensage/FullScreen"><ExpandIcon className="cursor-pointer h-5"  />  </Link>
                    <HeaderCompont title="Mensagens" />
                    
                </div>
                <div className="p-5 ">
            <div className="w-[70%] mx-auto ">
            <Form>
          
               
             <InputG  type="text"  placeholder="Buscar..." id="search" />
             <button type="submit"><Search className="text-sky-300 h-5 "/></button>
          
             </Form>
             </div>
                    <ul>
                
                      {mensagem.map((m)=> <li className="cursor-pointer   p-2 my-2 text-gray-900 rounded-lg  border-b-2 border-green-200 " key={m.nome}
                        onClick={()=>handleClick(m)}
                          >
                        <span className=" text-lg text-sm  text-gray-50 bg-sky-400 rounded px-1 ">{m.nome}</span>
                        <Paragrath>{m.mensage[0]}</Paragrath>
                         </li>)}
                   
                    </ul>
            </div>
            </>
        }

          
        </div>
        

    )
}