import Link from 'next/link'
import styles  from '@/app/Components/Bunner/bunner.module.css'
import style from './anima.module.css'
import Humani from '@/app/HumanizingBrands'
import { TitleAboutUs } from '../../Components/AboutUs/title'
import { Subtitle } from '../../Components/AboutUs/subtitle'
import Image from 'next/image'
import Footer from '../../Components/Footer/page'
import { Button } from '@/app/HumanizingBrands/Button'


export default function AboutUs(){
    return(
        <div className=''>
        <div className={styles.bunner}>
        <div className="grid justify-center container mx-auto">
        <TitleAboutUs>Seja bem Vindo a 
            <span className='bg-black px-3 py-1 ms-2 shaddow-lg rounded-lg'>Tchivala</span>
        </TitleAboutUs>
        <article className='sm:max-w[100%] mb-4 font-bold text-lg text-gray-100 w-full md:max-w-[60%] text-center mx-auto px-3 md:px-10'>Este Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Dolorum debitis beatae, <Link href='/User/1'> Usuario </Link>
            at quaerat molestiae rem provident inventore,
             commodi fugit dolor quod molestias? Possimus
              aliquam dolorum ipsa magnam 
            assumenda incidunt laudantium.</article>
            <div className='flex flex-col sm:flex-row justify-center gap-2 md:gap-8'>
      <Button>Patrocinar</Button>
  <Button>Mensagem</Button>



</div>

</div>



            

        </div>
 <div className=''>

    <Humani/>
</div>
   

      <div className='text-center mt-1  pt-5 p-10'>
        <Subtitle>O que fazemos?</Subtitle>
        <article className='text-xl  w-full md:max-w-[70%] text-center mx-auto px-10'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus expedita, nihil voluptatum officia animi quam sint laboriosam ad illum ab, iure accusantium numquam. Amet perferendis repudiandae voluptate non voluptates doloremque molestiae corporis illum autem, sapiente molestias dolorum, error dolorem veritatis! Pariatur nemo dicta ipsam est. Velit perspiciatis excepturi repellat.

          </article>
      </div>

      <Footer/>
        </div>
    )
}