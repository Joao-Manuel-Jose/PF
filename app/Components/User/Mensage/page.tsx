import { ReceiptIcon, SendIcon, X } from "lucide-react"
import { Paragrath } from "../../Header/User/link"
import { useState } from "react"
import { PagrathMensage } from "./paragraphMenssage"
import { Input } from "@/app/(RotasPublicas)/Sign_up/input"
import { ContainerMensage } from "./ContainerMensage"
import { InputMensagge } from "./input"
import { ButtonMensage } from "./button"
import AutoExpandingTextarea from "./textarea"
interface mensagemS{
    id:number,
    nome:string,
    mensage:string[],
}

export default function Mensage (){
    const [texto, setTexto]=useState<{[key:number]:string}>({})

    const [mensagemSelecionda, setMensagemSelecionada]=useState<mensagemS| null>()
    const mensagem=[
        {
            id:1,
            nome:'Gelson',
            mensage:[
                
                'Transferencia feita',
                '200mil kz'
            ]},
            {
                id:2,
                nome:'Donilson',
                mensage:[
                
                    '5000 toneladas de milho solicitadas',
                    '900mil kz transferido'
                ]},
            
    ]
    function handleChangeInput(userId:number, value:string){
        setTexto((prevText)=>({...prevText, [userId]:value}))
    }
    function handleClick(mensagem:mensagemS){
        setMensagemSelecionada(mensagem)


    }
    return(
      
      
        <div className="  shadow-md bg-gray-100 p-5 rounded-lg">
        {
            mensagemSelecionda?
            <>
                <header>
                <X className="cursor-pointer text-sky  "  onClick={()=>setMensagemSelecionada(null)} />
                </header>
                <h1 className="text-lg font bold mb-8">{mensagemSelecionda.nome}</h1>
                
                <p>{mensagemSelecionda.mensage.map((p,i)=><PagrathMensage key={i}>{p}</PagrathMensage>)}</p>
       
                <ContainerMensage>
                <AutoExpandingTextarea className="mb-4" />
                 
                    <ButtonMensage><SendIcon className="text-sky-500" /></ButtonMensage>

                </ContainerMensage>
                
                </>
                :
            <>
            <h1 className="text-center"><SendIcon/> Mensagens  </h1>
                <ul>
                
                {mensagem.map((m)=> <li className="cursor-pointer shadow-lg bg-gray-200 p-2 my-4 rounded-lg" key={m.nome}
                onClick={()=>handleClick(m)}
                >
                        {m.nome}
                        <Paragrath>{m.mensage[0]}</Paragrath>
                    </li>)}
                   
            </ul>
            </>
        }

          
        </div>
        

    )
}