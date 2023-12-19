import { Bell } from "lucide-react";

export function Notification({props}:{props:number}){
    return(<>
        <h1 className="flex text-xl font-semibold ">
        <Bell className="text-blue-500"/>  {props}  Noticações 
            </h1>
            <div className="shadow-md bg-gray-100 p-5 rounded-lg">
                <ul>
                    <li className="bg-gray-200 p-2 my-4 rounded-lg">
                        Adicionar conta visa
                    </li>
                    <li className="bg-gray-200 p-2 my-4 rounded-lg">
                        500 caixas de Manga solicitada para Luanda
                    </li>
                    <li className="bg-gray-200 p-2 my-4 rounded-lg">
                       TRACK_transportadora disponível para entrega
                    </li>
                    <li className="bg-gray-200 p-2 my-4 rounded-lg">
                       Fertilizantes em pendente
                    </li>
                    <li className="bg-blue-200 p-2 my-4 rounded-lg">
                       1.000.000,00 kz transferidos por <a href="#">Tchivala</a>
                    </li>
                    <li className="bg-gray-200 p-2 my-4 rounded-lg">
                      Solicitação de 40 toneladas de feijão Makundi, por Joana Pereira
                    </li>
                </ul>
            </div>
            </>
    )


}