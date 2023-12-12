
import Link  from "next/link";
import { Linka } from "../Header/link";
import { Button } from "../Sign_up/button";
import { Title } from "../Sign_up/title";
import { InputL } from "./Input";
import { LInputLL } from "./LInputL";

export default function Login(){
    return(
        <div className="flex items-center justify-center">
        <div className=" md:w-[50%] grid items-center py-20 md:px-5 px-2 mt-20 bg-gray-100 mx-2 md:mx-14 
         border border-green-500 rounded-lg ">
      
        <Title>Login</Title>
            <form action="">
                <div className="grid  gap-2 ">

            <InputL  placeholder="Email:" type="email" />
            <InputL  placeholder="Senha: " type="password" />
            
             
            <Link href="/componensts/Sign_up" className="text-right pr-10">Não tenho uma conta:</Link>
            <Button type="submit">Entrar</Button>
            </div>
           
        </form>
      
        
        </div>
        </div>
    )
}