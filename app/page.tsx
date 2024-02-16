
import Image from 'next/image'
import { Bunner } from './Components/Bunner/page'
import Footer from './Components/Footer/page'
import { Navbar } from './Components/Header/navbar'
import HumanizingBrands from './HumanizingBrands'
import { ContainerImage } from './Components/ContainerImage/Container'
import MainContainer from './Components/ContainerImage/maincontainer'
import { Counter } from './Components/Home/Counters'



export default function Home() {

  return (
    <>
   <Navbar/>
      <Bunner/>
      <Counter />

      <MainContainer children1='yyyyyyy' children2={ <h1 className="my-3 text-center text-sm md:text-sm font-normal"></h1>
            
            
          }
            
            >
      
      
       </MainContainer>
   
    
    </>
  )
}
