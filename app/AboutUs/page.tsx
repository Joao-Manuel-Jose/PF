import Link from 'next/link'
import styles  from '../Components/Bunner/bunner.module.css'
import style from './anima.module.css'

import { TitleAboutUs } from './title'
import { Subtitle } from './subtitle'
import Image from 'next/image'
import Footer from '../Components/Footer/page'


export default function AboutUs(){
    return(
        <div>
        <div className={styles.bunner}>
        <div className="grid justify-center container mx-auto">
        <TitleAboutUs>Seja bem Vindo a 
            <span className='bg-black px-3 py-1 ms-2 shaddow-lg rounded-lg'>Tchivala</span>
        </TitleAboutUs>
        <article className='  w-full md:max-w-[70%] text-center mx-auto px-10'>Este Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Dolorum debitis beatae, <Link href='/User/1'> Usuario </Link>
            at quaerat molestiae rem provident inventore,
             commodi fugit dolor quod molestias? Possimus
              aliquam dolorum ipsa magnam 
            assumenda incidunt laudantium.</article>
            <div className='flex flex-col sm:flex-row justify-center sm:gap-2 md:gap-8'>
  <Link href='#' className='mt-2 md:mx-0 mx-auto bg-red-200 text-black shadow hover:brightness-90 rounded-lg p-2'>
    Sugerir Melhoria
  </Link>
  <Link href='#' className='mt-2 md:mx-0 bg-white mx-auto text-black shadow hover:brightness-90 rounded-lg p-2'>
    Patrocinar o projecto
  </Link>



</div>

</div>



            

        </div>
        <div className='text-center mt-1 bg-gray-100 pt-5 p-10'>
    <Subtitle>Quem Somos ?</Subtitle>
    <div className='grid md:grid-cols-2 gap-4 items-center'>
      <Image className={style.img} src='/girl.png' alt='serviços' width='500' height='200'/>
      <article className='  w-full md:max-w-[100%] text-center mx-auto px-10'>

  A Tchivala foi desenvolvido para 
  
 facilitar as pessoas, sobre tudo 
agrícultores e produtores, a venderem os seus produtos sem terem que 
precisar de se deslocarem de um lugar ao outro em busca de 
compradores, pois que, uma vez implementado o nosso sistema, os 
consumidores irão até ao encontro dos produtores.
 


     </article>

    </div>
   
</div>
      <div className='text-center mt-1 bg-gray-100 pt-5 p-10'>
        <Subtitle>O que fazemos?</Subtitle>
        <article className='  w-full md:max-w-[85%] text-center mx-auto px-10'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quos, inventore quo excepturi quam neque iure labore! Ab, at nemo hic quidem nam impedit, eveniet in tenetur mollitia, quis iste ullam sit facilis deleniti! Nisi quasi ratione quisquam similique pariatur ex perspiciatis voluptatem deleniti, commodi maiores aspernatur alias dicta consectetur,
           nostrum enim. Cumque quia explicabo, dolores minus 
           rem doloremque sapiente.

          </article>
      </div>

      <Footer/>
        </div>
    )
}