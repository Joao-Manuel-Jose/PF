// CadastroCard.tsx


import Image from 'next/image';
import { PlusCircle } from 'lucide-react';
import { ButtonPf } from '@/app/Components/User/Modal/button';
import { ContainerProducts } from './container';
import { ReactNode } from 'react';

interface CadastroCardProps {
    children:ReactNode
    id:number
  name: string;
  foto: string;
  preco:number
}

export function CardCProduct({ children, name, foto, preco }: CadastroCardProps) {
  return (
    <ContainerProducts>
      <div className="relative h-20"> {/* Defina a altura que desejar para o contêiner do cartão */}
        <Image src={foto} fill  sizes='5' quality={75} alt={name} />
      </div>
      <div className="px-0 md:px-1 py-1 flex flex-col justify-between">
        <div>
          <p className='font-semibold  text-xs'>{name}</p>
          <span className='text-xs text-center'>{
            new Intl.NumberFormat('pt-AO', {
              style: 'currency',
              currency: 'AKZ'
            }).format(preco)}</span>
        </div>
        <div className="mt-auto"> {/* mt-auto empurra o conteúdo para a parte inferior */}
          {children}
        </div>
      </div>
    </ContainerProducts>
  )
}


