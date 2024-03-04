import { Bunner } from './Components/Bunner/page'
import { Navbar } from './Components/Header/navbar'
import MainContainer from './Components/ContainerImage/maincontainer'
import { Counter } from './Components/Home/Counters'
import Footer from './Components/Footer/page'
import { CounterHome } from './Home/Counters'
import { TitlePublic } from './Components/Global/titlep'



export default function Home() {

  return (
    <>
   <Navbar/>
      <Bunner/>
      
      <Counter/>
     
    
      <MainContainer children1='yyyyyyy' children2={ <h1 className="my-3 text-center text-sm md:text-sm font-normal"></h1>
            
            
          }
            
            >
      
      
       </MainContainer>

       <section className='my-4'>
      <TitlePublic>Produtos</TitlePublic>
      <p className='text-center text-sm font-normal'>Aqui tú podes comprar produtos agricolas e seus <br/>  derivados à grande quantidades!</p>
      </section>
     
      
     
       <Footer/>
   
    
    </>
  )
}
