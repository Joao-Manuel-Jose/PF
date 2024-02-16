// CadastroCard.tsx
import React from 'react';

import Image from 'next/image';
import { LinkG } from '@/app/Components/Global/link';
import { ButtonG } from '../../Global/button';
import { ButtonPf } from '../../User/Modal/button';
import { PlusCircle } from 'lucide-react';

interface CadastroCardProps {
  title: string;
  iconSrc: string;
  numberUsers:number
}

export function CardCounter({ title, iconSrc ,numberUsers}:CadastroCardProps){
  return (

      <div className="sm:mx-1 mx-0 max-w-sm  rounded-xl overflow-hidden shadow-lg bg-gray-50    border border-black-200 ">
      <Image src={iconSrc} width={200} height={200} alt={title} className='w-full' />
      <div className="px-6 py-3">
        <PlusCircle strokeWidth={1.3} className='text-green-400 w-8'/>
        <ButtonPf color='bg-orange-400'>{numberUsers} {title}</ButtonPf>
     
       
       
      </div>
    </div>
   
 
    
  )
}



