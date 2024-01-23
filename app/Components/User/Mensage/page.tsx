import { ExpandIcon, FileAudioIcon, ReceiptIcon, Search, SendIcon, X } from "lucide-react"
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
      
      
        <div className="relative shadow-md bg-gray-100  rounded-lg">
        {
            mensagemSelecionda?
            <>
            <div className="stick top-0 bg-gray-50 rounded-md border-b border-gray-300 z-50 shadow-sm p-4 md:p-4 grid">
            <X className="cursor-pointer text-sky  "  onClick={()=>setMensagemSelecionada(null)} />
                <HeaderCompont title={mensagemSelecionda.nome}  />
                
              
              </div>
    
                <div className="p-5 ">
                <p>{mensagemSelecionda.mensage.map((p,i)=><PagrathMensage key={i}>{p}</PagrathMensage>)}</p>
            
            
               <ContainerMensage>
                    <AutoExpandingTextarea/>

                    <ButtonMensage><SendIcon className="text-sky-400"/></ButtonMensage>
                   
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
             <button type="submit"><Search className="text-sky-300 "/></button>
          
             </Form>
             </div>
                    <ul>
                
                      {mensagem.map((m)=> <li className="cursor-pointer shadow-lg bg-gray-200 p-2 my-4 text-gray-900 rounded-lg" key={m.nome}
                        onClick={()=>handleClick(m)}
                          >
                        <span className="text-sky-500 text-lg font-semibold">{m.nome}</span>
                        <Paragrath>{m.mensage[0]}</Paragrath>
                         </li>)}
                   
                    </ul>
            </div>
            </>
        }

          
        </div>
        

    )
}