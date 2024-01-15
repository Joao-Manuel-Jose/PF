// src/components/Offcanvas.js
import clsx from 'clsx';
import { MycontentOfcanvas, ContentOfcanvas } from './contentOfcanvas';
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

// Importações...

export interface ContentOfcanvas {
  name: string;
  href: string;
  icone: ReactNode;
  componente: ReactNode;
}

interface OffcanvasProps {
  onClose: () => void;
  data: ContentOfcanvas[];
}

export const Offcanvas = ({ onClose, data }: OffcanvasProps) => {
  return (
    <div>
      {/* Botão para abrir o offcanvas */}

      {/* Offcanvas */}
      <div className="block md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 py-10">
        <div className="bg-white p-2 md:p-4 w-80 absolute top-0 left-0 h-full mb-16 overflow-y-auto">
          <button onClick={onClose} className="mt-4   p-2">
            <X className='text-red-500 font bold text-md' />
          </button>
          {/* Conteúdo do offcanvas */}
          <div className=" md:col-span-3  py-4 px-0 md:px-2">
            <ul>            
              {data.map((produto, index) => (
              <li className="p-2 my-4 rounded-lg" key={index}>
                <Link
                  className={clsx(
                    'p-2 flex items-center text-md justyfy-center gap-1 shadow-md rounded-md  hover:bg-blue-300  hover:rounded-lg',
                    {
                      'bg-blue-500 text-white': produto.name === 'Notificações',
                    }
                  )}
                  href={produto.href}
                >
                  {produto.icone}
                  {produto.name}
                </Link>
              </li>
            ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};




export default Offcanvas;
