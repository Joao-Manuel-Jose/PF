'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from './Container'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'
import Boy from '@/public/girl.png'

export default function Index() {
  const [ref, inView] = useInView({});

  return (
    <Container>
      <motion.div 
        ref={ref}
        className="hidden lg:h-[666px] xl:h[700px] md:h-[555px] w-[565px] items-center md:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          className="hidden w-full md:block"
          src={Boy}
          height={666}
          width={565}
          alt="boy"
        />
      </motion.div>
      
      <div className="flex flex-col items-center justify-center space-y-4 py-20 md:-mt-2 md:items-start md:space-y-6 md:py-0">
        <div ref={ref} className=''>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-4 md:space-y-6'
          >
            <Title>Expandimos Negócios</Title>
            <Paragraph>
              <strong className="font-bold">Nossa paixão </strong>é dar visibilidade ao que é nosso
              e garanir preços justos e moderados no mercado.
            </Paragraph>
            <Button>Saber mais</Button>
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
