import { Bell } from "lucide-react";
import { ParagrathNotification } from "../Notifications/paragrath";
import { useEffect, useState } from "react";


export function HomeResult(){
    const [results,setResults]=useState([{
        id:1,
        content:'Esperando'
    }])
const adicional={
    id:2, 
    content:'Busque por produtos do mercado'
} 

    return(<>
        
            <div className=" h-screen shadow-md bg-gray-100 p-3 rounded-lg">
            <h1 className="flex text-xl font-semibold ">
         Resultados
            </h1>
                <ul>
                    {results.map(result=>(
                     <li className="p-2 my-4 rounded-lg " key={result.id}>
                        <ParagrathNotification>{result.content}</ParagrathNotification> 
                    </li>
                    ))}
                    
                   
                     
                    
                </ul>
            </div>
            </>
    )


}