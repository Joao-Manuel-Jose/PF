// CadastroCard.tsx
import React from 'react';

import Image from 'next/image';
import { LinkG } from '@/app/Components/Global/link';
import { PlusCircle } from 'lucide-react';
import { ButtonPf } from '@/app/Components/User/Modal/button';

interface CadastroCardProps {
  title: string;
  iconSrc: string;
  numberUsers:number
}

export function CardCounter({ title, iconSrc ,numberUsers}:CadastroCardProps){
  return (

      <div className="sm:mx-1 mx-0 max-w-sm  rounded-xl overflow-hidden shadow-lg bg-gray-50   border border-black-200 ">
      <Image src={iconSrc} width={65} height={75} quality={100} alt={title} className='' />
      <div className="px-0 md:px-3 py-3">
        <span className='flex items-center'><PlusCircle strokeWidth={1.3} className='text-green-400 w-8'/>{numberUsers}</span>
        <ButtonPf color='bg-orange-400'> {title}</ButtonPf>
     
       
       
      </div>
    </div>
   
 
    
  )
}



