"use client"
import Link  from "next/link";

import { Buttonl } from "./button";
import { Title } from "@/app/(RotasPublicas)/Sign_up/title"; 
import { InputL } from "./Input";
import styles from './login.module.css'

import { FormEvent, useState } from "react";
import LoginUser from "@/app/api/route";
import { redirect } from "next/navigation";
import { AuthProvider, useAuth } from "@/app/(User)/user";


export default function Login(){

   const [userAuthenticate, setUserAuthenticate]=useState('')
   const { user, login } = useAuth();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    if(userAuthenticate){
      redirect(`User/${userAuthenticate}`)
    }
  
   
    async function HandleLogin(e:FormEvent){
      
    e.preventDefault()
    try {
      
     const response=  await LoginUser({email,password});
     if(response){
      await login(response.token, response.user);
      setUserAuthenticate(response.user.name)
      console.log(userAuthenticate)
     }
   
     
      } catch (error) {
        console.error('Erro ao enviar dados:', error);
  
      }
       

    }
    return(
        <>
           
        <div className={styles.bg} >
        
      
        {/*<div className={styles.box}>*/  }
        <div className="flex items-center justify-center">


        <div className=" md:w-[40%] grid items-center py-14 md:py-20 md:px-5 px-5 mt-20 bg-gray-100 mx-2 md:mx-14 
     rounded-xl shadow-2xl z-30">
     
              <Title>Login</Title>
            <form onSubmit={HandleLogin} >
                <div className="grid  gap-2 ">

            <InputL  placeholder="nome" type="text " name="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <InputL  placeholder="Senha: " type="password"  name="password"
            value={password} onChange={({target})=>setPassword(target.value)}
            />
            
             
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