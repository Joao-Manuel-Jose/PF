import { modalP } from "@/app/(User)/User/NUser/modal/Fazenda/page"
import { useAuth } from "@/app/(User)/user"
import { Modal } from "@/app/Components/User/Modal/page"
import { useEffect, useState } from "react"
import { ProductData } from "../CadastroProduto/page"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion";
import { LucideArchiveX, LucideArrowLeftCircle, LucideArrowRightCircle, LucideClipboardSignature, LucideTrash, LucideTrash2 } from "lucide-react"
import clsx from "clsx"
import Swal from 'sweetalert2';
import { LinkG } from "@/app/Components/Global/link"
function TableRow({ p, i, currentPage, itemsPerPage,onDelete }:{p:ProductData,i:number,currentPage:number,itemsPerPage:number, onDelete: () => void}){
    const controls = useAnimation();
  
    useEffect(() => {
        controls.start({ opacity: 1, transition: { duration: 1.7, delay: i * 0.1} });
    }, [controls, i, p]);
  
    return (
      <motion.tr
        initial={{ opacity: 0 }}
        animate={controls}
        key={i}
        className=" text-end text-sm  my-5 p-e rounded items-center"
      >
        <td className="p-e-4  border-e-1 px-4 border-green-500">
            {(currentPage - 1) * itemsPerPage + i + 1}
          </td>
        <td className="py-1">
          <Image src={`http://localhost:4000/${p.fto}`} width={100} height={100} alt={p.nome} className="shadow-xl rounded-md" />
        </td>
        <td className="text-start px-2">{p.nome}</td>
        <td>{p.preco}</td>
        <td>{p.quantidadeS}</td>
        {p.qualidade === 5 && <td className="text-center px-2">Razoavel</td>}
        {p.qualidade === 8 && <td className="text-center px-2">Boa</td>}
        {p.qualidade === 10 && <td className="text-center px-2">Excelente</td>}
        <td>{p.quantidade}</td>
        <td title="Editar" className="px-2"><LinkG color="bg" href="#"><LucideClipboardSignature className="text-sky-400"/></LinkG></td>
        <td className="px-2" title="Apagar" onClick={onDelete}><LinkG color="t" href="#"><LucideTrash2 className="text-orange-400 text-start"/></LinkG></td>
      </motion.tr>
    );
  };
  

export  default function ModalProduct({ isOpen,onClose}:modalP){
  const showConfirmationModal = async () => {
    const result = await Swal.fire({
      title: 'Você tem certeza?',
      text: 'Esta ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    });
  
    if (result.isConfirmed) {
      // Lógica a ser executada se o usuário confirmar
      Swal.fire('Deletado!', 'Seu arquivo foi deletado.', 'success');
    } else {
      // Lógica a ser executada se o usuário cancelar
      Swal.fire('Cancelado', 'Seu arquivo está seguro :)', 'info');
    }
  };
  
    const {user}=useAuth()
    const [currentPage,setCurrentPage]=useState(1)
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage=5
      
    const [listProducts,setListProducts]=useState<ProductData[]>([])
    const isFirstPage = currentPage===1;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/fazenda/produto/${user?.id}/${currentPage}`);
            const { totalPages, responseBody } = await response.json();
      
            const responseBodyArray = JSON.parse(responseBody);
      
            // Se estiver na primeira página, redefine o estado
           
                setListProducts(responseBodyArray.map(({ produto, quantidade }: { produto: ProductData, quantidade: string }) => ({
                    id:Number(produto.id),
                    nome: produto.nome,
                    categoria: produto.categoria,
                    descricao: produto.descricao,
                    preco: produto.preco,
                    qualidade: produto.qualidade,
                    quantidade: Number(quantidade),
                    quantidadeS: produto.quantidadeS,
                    fto: `${produto.foto}`,
                    foto: null,
                  })));

            
      
            setTotalPages(totalPages);
          } catch (error) {
            alert('Erro ao obter os produtos.');
          }
        };
      
        fetchData();
      }, [user?.id, currentPage]);
      
      
   
    console.log(listProducts)
  return(
 <Modal isOpen={isOpen} onClose={onClose} title="Produtos" bgImg="bg-[url('/teste.jpg')] bg-cover bg-center">
   <div className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        
      
            <thead className=" rounded my-3   bg-orange-300 text-white">
                
            <tr className="h-16 rounded-xl text-center ">
            <th>Nº</th>
            <th>foto</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quant. de Saída</th>
            <th>Qualidade</th>
            <th>Stock</th>
            <th>Editar</th>
          <th>Eliminar</th>
            
            </tr>
            </thead>
          
        
        
            <tbody className="h-[30rem] bg-white divide-y divide-gray-200 h-[80px]">
                {totalPages>=1?
                    listProducts
                    .map((p, i) => (
                
                    
                        
                            <TableRow key={i} p={p} i={i} currentPage={currentPage} itemsPerPage={itemsPerPage} onDelete={showConfirmationModal} />
                        
                    
                    ))
                    : <tr>
                       <td colSpan={10} className="text-center p-6 text-md md:text-xl uppercase">Sem produtos</td>
                      </tr>
                }
                </tbody>
                    
         <tfoot>
          <tr>
            <td colSpan={8} className="text-end text-orange-300 text-sm p-2">{currentPage} de {totalPages}</td>
          </tr>
         </tfoot>
        
                 
      
      
        
    </table>
    </div>
    <div className="mt-1 shadow-xl flex gap-2 justify-center items-center">
        <button
          className={clsx(
            ' font-normal p-2 rounded-full bg-white shadow ',
            {
                'text-gray-300':currentPage==1
              })}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={isFirstPage}
        >
          <LucideArrowLeftCircle/>
          </button>
        <button
          className={clsx(
            ' font-normal p-2 rounded-full  shadow   bg-white',
            {
                'text-gray-300':totalPages==0 || currentPage>=totalPages
              })}
          onClick={() => setCurrentPage((prev) => prev + 1)}
         disabled={totalPages==0 || currentPage>=totalPages}
        >
          <LucideArrowRightCircle/>
        </button>

      </div>
    
           

 </Modal>
  )
}
