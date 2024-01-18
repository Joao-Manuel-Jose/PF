import { Bell } from "lucide-react";
import { ParagrathNotification } from "./paragrath";
import { HeaderCompont } from "../../Global/header_component";

export function Notification({props}:{props:number}){
    const Notification=[
        {
            id:1,
            content:'500 caixas de Manga solicitada para Luanda'
        },
        {
            id:2,
            content:' TRACK_transportadora disponível para entrega'
        },
        {
            id:3,
            content:'  Fertilizantes em pendente'
        },
        {
            id:4,
            content:'   1.000.000,00 kz transferidos por Tchivala'
        },
        {
            id:5,
            content:'  Solicitação de 40 toneladas de feijão Makundi, por Joana Pereira'
        },

    ]
    return(<>
      
            <div className="shadow-md bg-gray-100  rounded-lg">
            <div className="bg-gray-50 rounded-md border-b border-gray-300 z-50 shadow-sm p-4 md:p-5 ">
                
                <HeaderCompont title="Notificações" />
                
            </div>
       
                <ul className="p-3">
                    {Notification.map(noti=>(
                     <li className="bg-gray-200 p-2 my-4 rounded-lg shadow-md" key={noti.id}>
                        <ParagrathNotification>{noti.content}</ParagrathNotification> 
                    </li>
                    ))}
                    
                   
                     
                    
                </ul>
            </div>
            </>
    )


}