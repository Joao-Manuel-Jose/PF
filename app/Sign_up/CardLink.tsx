// CadastroCard.tsx
import React from 'react';
import { Linka } from '../Components/Header/link';

interface CadastroCardProps {
  title: string;
  iconSrc: string;
  link:string;
}

export function CardLink({ title, iconSrc ,link}:CadastroCardProps){
  return (
    <div>
      <div className="max-w-sm py-5 rounded overflow-hidden shadow-xl bg-gray-200 hover:bg-blue-200  border border-black-200 md:w-[350px] sm:w-[500px]
      ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <img src={iconSrc} alt={title} className="w-16 h-16 mx-auto mb-4" />
        <Linka href={link}>Criar Conta</Linka>
      </div>
    </div>
    </div>
  )
}

