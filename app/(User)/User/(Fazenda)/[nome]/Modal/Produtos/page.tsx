import { modalP } from "@/app/(User)/User/NUser/[params]/modal/Fazenda/page"
import { useAuth } from "@/app/(User)/user"
import { Modal } from "@/app/Components/User/Modal/page"
import { useEffect, useState } from "react"
import { ProductData } from "../CadastroProduto/page"
import Image from "next/image"



export  default function ModalProduct({ isOpen,onClose}:modalP){

    const {user}=useAuth()
    const [listProducts,setListProducts]=useState<ProductData[]>([])
    useEffect(()=>{
       
           

           
                fetch(`http://localhost:4000/fazenda/produto/${user?.id}`)
                .then(response => response.json())
                .then((data) =>{
                    console.log(data)
                    data.map(({produto,quantidade}:{produto:ProductData,quantidade:string})=>setListProducts(prev=>([
                    ...prev,
                    {
                        nome:produto.nome,
                        categoria:produto.categoria,
                        descricao:produto.descricao,
                        preco:produto.preco,
                        qualidade:produto.qualidade,
                        quantidade:Number(quantidade),
                        quantidadeS:produto.quantidadeS,
                        fto:`${produto.foto}`,
                        foto:null,

                    }
                    
                ])))})
                .catch(error => alert('Erro ao obter os productos:'));
              

            
            
            
        

    },[user?.id])
    console.log(listProducts)
  return(
 <Modal isOpen={isOpen} onClose={onClose} title="Produtos" bgImg="bg-[url('/teste.jpg')] bg-cover bg-center">
    <table className=" text-center mx-auto grid gap-2 justify-center items-center" >
      
            <thead className="text-white mx-auto text-center">
                
            <tr className="p-2 ">
            <th>Nº</th>
            <th>foto</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Saída</th>
            <th>Qualidade</th>
            <th>Stock</th>
            
            </tr>
            </thead>
          
        
        
            <tbody>
                {
                    listProducts.map((p,i)=>(
                        <tr key={i} className="flex gap-3 p-2  items-center bg-gray-100 shadow-xl rounded-xl my-2">
                            <td className="p-e-4 border-e-2 border-green-500">{++i}</td>
                            <td>
                                <Image src={`http://localhost:4000/${p.fto}`} width={100} height={100} alt={p.nome} className="shadow-xl rounded-md"/>
                            </td> 
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.quantidadeS}</td>
                            {
                                p.qualidade==5&&
                               <td>Razoavel</td>
                               
                            }
                             {
                                p.qualidade==8&&
                               <td>Boa</td>
                               
                            }
                             {
                                p.qualidade==10&&
                               <td>Excelente</td>
                               
                            }

                            <td>
                                {p.quantidade}
                            </td>

                      

                        </tr>
                    ))
                }
                
                    
         
        
                 
            </tbody>
      
        
    </table>

 </Modal>
  )
}
