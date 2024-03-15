"use client"
import {useState, useEffect} from 'react'

import { CardLink } from '../../Components/SignUp/CardLink'



import  styles from './bd.module.css'
import { TitlePublic } from '@/app/Components/Global/titlep';
export default function SignUp(){
  const cadastros = [
    { title: 'Fazenda', iconClass: '/background/b-1.jpg', link:'/SignUp/Fazenda' },
    { title: 'Comprador', iconClass: '/background/compador.jpg', link:'/SignUp/Comprador' },
    { title: 'Indústria', iconClass: '/background/produtora.jpg', link:'/SignUp/Produtor' },
    { title: 'Transportadora', iconClass: '/background/transportadora2.JPG' ,link:'/SignUp/Transportadora' },
   
   
  
  ];



    return(<div className='bg-gray-200 min-h-[100vh]'>
        
          <div className="flex flex-col  items-center  ">
            <div className='my-5 sm:mt-3'>
              <h1 className='uppercase  p-2 bg-yelow-600 rounded-xl '>Cadastre-se de acordo a sua entidade</h1>
              <hr className='text-sky-300'/>
            </div>
            
            <div className="grid md:grid-cols-2 justify-center gap-2 mx-2  md:gap-4">
                {cadastros.map((cadastro, index) => (
                <CardLink key={index} title={cadastro.title} iconSrc={cadastro.iconClass} link={cadastro.link}/>
                     ))}
            </div>
          </div>
       </div>
     
      
   
    )

}