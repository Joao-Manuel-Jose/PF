// src/components/Offcanvas.js
import clsx from 'clsx';
import { BarChart3, BellRing, CircleUserRound, ClipboardEdit, Eye, FileText, LogOut, MessageCircle, PlusCircle, Sparkles, X } from 'lucide-react';
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
interface OffcanvasProps {
  onClose: () => void;
}


export const Offcanvas = ({onClose}:OffcanvasProps) => {

  
  
  const links = [
    { name: 'Notificações', href: '#' ,icone:<BellRing  size={30}/>},
    { name: 'Mensagens ', href: '#' ,icone:<MessageCircle  size={30}/>},
    { name: ' Inserir Produto ', href: '#', icone:<PlusCircle  size={30} /> },
    {
      name: 'Visualizar Produtos',
      href: '#',icone:<Eye color="#0b0c38"
      size={30}
      />
    
    },
    { name: 'Gerar Relatório', href: '#' , icone:<FileText color="#000000" size={30} />},
    {name:'Editar Produto', href:'#', icone:<ClipboardEdit color="#0b0c38" size={30} />},
    {name:'Promover produto',href:'#', icone:<Sparkles color="#c4da1b" size={30} />},
    {name:'Vericar Rendimento',href:'#', icone:<BarChart3 color="#2c12f3"  size={30} />},
    {name:'Sair',href:'/', icone:<LogOut size={30} />}
  ];

  return (
    <div>
      {/* Botão para abrir o offcanvas */}
      

      {/* Offcanvas */}
    
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50   py-10">
          <div className="bg-white p-4 w-64 absolute top-0 left-0 h-full mb-16 overflow-y-auto">
          <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2">
              <X />
            </button>
            {/* Conteúdo do offcanvas */}
            <div className=" md:col-span-3 py-4 px-2">
            <h1 className="flex items-center text-xl gap-2">Gelson</h1>
            <CircleUserRound size={40} className="text-gray-600" strokeWidth={0.8} />  
            <ul>
                {links.map((produto, index)=>{
                    return(
                <li className=" p-2 my-4 rounded-lg" key={index}>
                    <Link className={clsx('p-2 flex items-center text-md justyfy-center gap-1 shadow-md rounded-md  hover:bg-blue-300  hover:rounded-lg',

                    {
                        'bg-blue-500 text-white':produto.name==='Notificações'
                    })
                    } href={produto.href}  >
                 {produto.icone}   
                     
                     {produto.name}</Link></li>)})}
            </ul>

        </div>
         
         
          </div>
        </div>
      
    </div>
  );
};

export default Offcanvas;
