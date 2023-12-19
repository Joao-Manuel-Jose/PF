
import Link  from "next/link";
import { Linka } from "../Components/Header/link";
import { Buttonl } from "./button";
import { Title } from "../Sign_up/title";
import { InputL } from "./Input";
import styles from './login.module.css'
import { Navbar } from "../Components/Header/navbar";

export default function Login(){
    return(
        <>
           
        <div className={styles.bg} >
        
      
        {/*<div className={styles.box}>*/  }
        <div className="flex items-center justify-center">


        <div className=" md:w-[40%] grid items-center py-20 md:px-5 px-5 mt-20 bg-gray-100 mx-2 md:mx-14 
     rounded-lg shadow-2xl z-30">
     
              <Title>Login</Title>
            <form action="">
                <div className="grid  gap-2 ">

            <InputL  placeholder="Email:" type="email" />
            <InputL  placeholder="Senha: " type="password" />
            
             
            <Link href="/Sign_up" className="md:ms-20 text-blue-400">Não tenho uma conta</Link>
            <Buttonl type="submit">Entrar</Buttonl>
            </div>
           
        </form>
      
        
        </div>
        </div>
        
        </div>
        </>
    )
}