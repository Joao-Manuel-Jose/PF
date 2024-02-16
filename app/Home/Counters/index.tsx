import { ButtonC } from "@/app/Components/ContainerImage/button";
import { CardCounter } from "./cardCounter";
const cadastros = [
    { title: 'Fazendas', iconClass: '/IconCad/fazenda.png', numberUsers:100 },
    { title: 'Indústrias', iconClass: '/IconCad/industria.png', numberUsers:160 },
    { title: 'Emp. Transporte', iconClass: '/IconCad/transporte.png', numberUsers:200 },
    { title: 'Compradores', iconClass: '/IconCad/client.png' ,numberUsers:1000 },
   
   
  
  ];

export function CounterHome(){
    return(
        <div className="py-3 ">

            <div className="flex items-center justify-center my-1">
            <h1 className="text-center   p-1 rounded-xl uppercase text-md md:text-lg text-white font-normal">A plataforma conta com:</h1>
            </div>
            
            <div className="mx-1 flex justify-center items-center  ">
            
            <div className=" grid grid-cols-2  md:grid-cols-4 gap-2 md:gap-3">
                {cadastros.map((data, index) => (
                <CardCounter key={index} title={data.title} iconSrc={data.iconClass} numberUsers={data.numberUsers}/>
                     ))}
            </div>
          
          </div>
          <p className=' hidden mt-3 text-center text-xs md:text-sm text-gray-50 font-semibold px-1'>
          Aqui
              podes comprar prudutos agricolas e derivados  de forma online<br />
              com a   disponibilidade de serviços   de transportes.
            </p>
            <div className="flex justify-center mt-3">
            
           {/* <ButtonC>Saber mais</ButtonC>*/}
              </div>
        
       </div>
   
    )
}