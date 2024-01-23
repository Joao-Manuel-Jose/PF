import { Bell } from "lucide-react";
import { ParagrathNotification } from "../Notifications/paragrath";
import { useEffect, useState } from "react";
import { HeaderCompont } from "../../Global/header_component";


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
        
            <div className=" h-screen shadow-md bg-gray-100  rounded-lg">
            <div className="stick top-0 bg-gray-50 rounded-md border-b border-gray-300 z-50 shadow-sm p-4 md:p-5 ">
           
                <HeaderCompont title='Favoritos'/>
                
              
              </div>
                <ul >
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