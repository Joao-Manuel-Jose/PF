import { url } from 'inspector'
import styles from './bunner.module.css'
import { Search } from 'lucide-react'


export function Bunner(){
    return(
        <div className={styles.bunner}>
          <h1 className='text-white text-lg text-center'>
            Pesquisar Produtos do mercado angolano:
          </h1>
           <div className="max-w-md mx-auto bg-white p-1 rounded-md shadow-md">
    <form action="#" method="GET" className="flex items-center">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pesquisar..."
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
      <button type="submit" className="flex-shrink-0   text-sm text-blue py-1 px-2 rounded">
        
      <Search />
         
      </button>
    </form>
  </div>

        </div>
    )
}