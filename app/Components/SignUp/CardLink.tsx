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

      <div className="sm:mx-2 mx-0 max-w-sm  rounded-xl overflow-hidden shadow-lg bg-gray-50   pb-5 border border-black-200 md:w-[20rem] sm:w-24rem]
      ">
      <Image src={iconSrc} width={318} height={100} alt={title} className='w-full'/>
      <div className="px-6 py-2">
        <div className="font-normal sm:text-sm md:text-md uppercase mb-2">{title}</div>
        <LinkG  color='bg-orange-300 mx-5' href={link}> Cadastrar</LinkG>
       
       
      </div>
    </div>
   
 
    
  )
}

