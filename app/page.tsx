import Image from 'next/image'
import { Bunner } from './Components/Bunner/page'
import Footer from './Components/Footer/page'
import { Navbar } from './Components/Header/navbar'
import HumanizingBrands from './HumanizingBrands'


export default function Home() {
  return (
    <>
   <Navbar/>
      <Bunner/>

      <HumanizingBrands/>
    
    </>
  )
}
