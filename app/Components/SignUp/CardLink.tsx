// CadastroCard.tsx
import React from 'react';

import Image from 'next/image';
import { LinkG } from '@/app/Components/Global/link';

interface CadastroCardProps {
  title: string;
  iconSrc: string;
  link:string;
}

export function CardLink({ title, iconSrc ,link}:CadastroCardProps){
  return (

      <div className="sm:mx-2 mx-0 max-w-sm  rounded-xl overflow-hidden shadow-lg bg-gray-50   pb-2 border border-black-200 
      ">
      <Image src={iconSrc} width={300} height={200} alt={title} />
      <div className="px-2 py-2">
        <div className="font-normal sm:text-sm md:text-md uppercase ">{title}</div>
        <LinkG  color='bg-orange-300 ' href={link}> Cadastrar</LinkG>
       
       
      </div>
    </div>
   
 
    
  )
}

