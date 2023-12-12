import { url } from 'inspector'
import styles from './bunner.module.css'


export function Bunner(){
    return(
        <div className={styles.bunner}>
          <h1 className='text-white text-lg text-center'>
            Pesquisar Produtos do mercado angolano:
          </h1>
          <form action="" className='text-center'>
            <div>
              
            </div>
            <input type="text" placeholder='Buscar...' className=' md:w-[500px] bg-gray-100 px-4 py-1 shadow-2xl mt-3 border 
            focus:border-green-300 
                      rounded-xl outline-none'  />
       </form>

        </div>
    )
}