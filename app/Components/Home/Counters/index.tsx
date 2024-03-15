import { CardCounter } from "./cardCounter";
const cadastros = [
    { title: 'Fazendas', iconClass: '/fazenda (2).jpg', numberUsers:100 },
    { title: 'Compradores', iconClass: '/background/compador.jpg', numberUsers:160 },
    { title: 'Indústrias', iconClass: '/background/produtora.jpg', numberUsers:200 },
    { title: 'Emp. de Transportes', iconClass: '/background/transportadora2.JPG' ,numberUsers:80 },
   
   
  
  ];

export function Counter(){
    return(
        <div className="py-3 ">
            
            <div className="flex items-center justify-center my-1">
            <h1 className="text-center   p-1 rounded-xl uppercase text-md md:text-lg font-normal">A plataforma conta com:</h1>
            </div>
            
            <div className="flex justify-center items-center py-4 ">
            
            <div className=" grid sm:grid-cols-2  md:grid-cols-2 justify-between gap-8">
                {cadastros.map((data, index) => (
                <CardCounter key={index} title={data.title} iconSrc={data.iconClass} numberUsers={data.numberUsers}/>
                     ))}
            </div>
          </div>
       </div>
   
    )
}