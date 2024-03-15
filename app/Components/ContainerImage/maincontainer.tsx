'use client'

import Image from 'next/image'
import boy from '@/public/girl.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ContainerImage } from './Container';
import { Children, ReactNode } from 'react';
import { ButtonC } from './button'
import { Title } from '@/app/HumanizingBrands/Title'
import { Paragraph } from '@/app/HumanizingBrands/Paragraph'



export default function MainContainer({children1, children2}:{
    children1:ReactNode,children2:ReactNode
}) {
  const [ref, inView] = useInView({});

  return (
    <ContainerImage>


  
      <motion.div 
        ref={ref}
        className="hidden lg:h-[32rem] xl:h[700px] md:h-[555px] w-[565px] items-center md:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
       
      </motion.div>
      <div className="flex flex-col items-center justify-center space-y-4 py-20 md:-mt-2 md:items-start md:space-y-6 md:py-0">
        <div ref={ref} className=''>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-4 md:space-y-6'
          >
             <Title>AgroClick</Title>
             <p className='text-center md:text-start text-white text-base'>
              Aqui
              podes comprar prudutos agricolas e derivados de forma online
              com a   disponibilidade de <br/>serviços de transportes.
            </p>
          
          <ButtonC>Entrar</ButtonC>
          </motion.div>
        </div>
      </div>
      
   
      </ContainerImage>
  )
}
