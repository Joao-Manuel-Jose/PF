"use client"
import {useState, useEffect} from 'react'

import { CardLink } from './CardLink'



import  styles from './bd.module.css'
export default function SignUp(){
  const cadastros = [
    { title: 'Fazenda', iconClass: '/background/b-1.jpg', link:'/SignUp/Fazenda' },
    { title: 'Comprador', iconClass: '/background/comprador2.jpg', link:'/SignUp/Comprador' },
    { title: 'Produtor', iconClass: '/background/produtora.jpg', link:'/SignUp/Produtor' },
    { title: 'Transportadora', iconClass: '/background/transportadora.JPG' ,link:'/SignUp/Transportadora' },
   
   
  
  ];



    return(<div className='bg-sky-100'>
        
          <div className="flex justify-center items-center py-10">
            
            <div className="grid md:grid-cols-2 justify-center gap-8">
                {cadastros.map((cadastro, index) => (
                <CardLink key={index} title={cadastro.title} iconSrc={cadastro.iconClass} link={cadastro.link}/>
                     ))}
            </div>
          </div>
       </div>
     
      
   
    )

}