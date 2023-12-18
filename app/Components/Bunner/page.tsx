import { url } from 'inspector'
import styles from './bunner.module.css'
import { Search } from 'lucide-react'
import { InputB } from './input'


export function Bunner(){
    return(
        <div className={styles.bunner}>
          <h1 className='text-white text-lg text-center'>
            Pesquisar Produtos do mercado angolano:
          </h1>
    <div className="md:max-w-lg  mx-4 md:mx-auto bg-white p-1 rounded-2xl shadow-md">
    <form action="#" method="GET" className="flex items-center">
      <InputB
        type="text"
        name="search"
        id="search"
        placeholder="Pesquisar..."
       />
      <button type="submit" className="flex-shrink-0   text-sm text-blue py-1 px-2 rounded">
        
      <Search />
         
      </button>
    </form>
  </div>

        </div>
    )
}