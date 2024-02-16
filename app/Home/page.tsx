import { Navbar } from "../Components/Header/navbar";
import { BunnerHome } from "./Bunner/page";
import { CounterHome } from "./Counters";
import { FooterHome } from "./footer";


export default function Page(){
    return(
    <div className="bg-[url('/teste.jpg')] bg-cover h-auto   bg-center      ">
    <Navbar/>
  
    <BunnerHome/>
    
    <CounterHome/>
    <FooterHome/>
    </div>
)}