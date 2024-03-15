"use client"
import Link  from "next/link";
import { Title } from "@/app/Components/SignUp/title"; 
import {MoonLoader, PacmanLoader} from 'react-spinners';

import styles from './login.module.css'
import { FormEvent, useEffect, useState } from "react";
import LoginUser from "@/app/api/route";
import { redirect } from "next/navigation";
import {  User, client, useAuth } from "@/app/(User)/user";
import {  ContainerLogin } from "../../Components/SignUp/AcessRouter/Container";
import { InputL } from "@/app/Components/Login/input";
import { AtSignIcon,  LockKeyholeIcon } from "lucide-react";
import { ButtonG } from "@/app/Components/Global/button";
import { Fazenda } from "../SignUp/Fazenda/page";



export default function Login(){

   const [userAuthenticate, setUserAuthenticate]=useState('')
   const { login } = useAuth();
   const [loading, setLoading] = useState(false);

   const [state,setState]=useState(true)
    const [email,setEmail]=useState('')
    const [pasword,setpasword]=useState('')
    const [client, setClient] = useState<client>({
      token:'',
      distrito:'',
      fto:'',
      nif: '',
      email: '',
      transporte: false,
      nome: '',
      provincia: '',
      municipio: '',
      comuna:'',
      telefone:'',
      accountNumber:'',
      bairro: '',
      rua: '',
      foto: null,
    });
    const [formData, setFormData] = useState<User>({
      token:'',
      distrito:'',
      fto:'',
      nif: '',
      email: '',
      transporte: false,
      nome: '',
      provincia: '',
      municipio: '',
      comuna:'',
      telefone:'',
      bairro: '',
      rua: '',
      nomeGestor:'',
      accountNumber:'',
      fotoGestor:'',
      foto: null,
    });
  
    async function HandleUpadte(){
        await  login('','fazenda',undefined,formData);
    }
   
    async function HandleLogin(e:FormEvent){
      
    e.preventDefault()
    try {
      setLoading(true)
     const {token, my}=  await LoginUser({email,pasword});
     const myRes=my
     if(token&&my){
    
      if(my.type_g=='fazenda'){
      setFormData({
        token:token,
        fto:myRes.foto,
        id:myRes.id,
        distrito:myRes.distrito,
        nif:myRes.nif,
        telefone:myRes.contacto.telefone,
        nome:myRes.nome,
        provincia:myRes.provincia,
        municipio:myRes.municipio,
        type:myRes.type_g,
        comuna:myRes.comuna,
        email:myRes.contacto.email,
        bairro:myRes.bairro,
        descricao:myRes.descricao,
        accountNumber:myRes.accountNumber,
        whatsapp:myRes.contacto.whatsapp,
        nomeGestor:myRes.gestor.nome,
        fotoGestor:myRes.gestor.foto,
        rua:myRes.rua,
        foto:null,
        transporte:myRes.transporte
})
    
          setTimeout(()=>setUserAuthenticate(myRes.type_g),1000)
      
      console.log(myRes)
    }else  if(my.type_g=='cliente'){
      await setClient({
        token:token,
        fto:myRes.foto,
        id:myRes.id,
        distrito:myRes.distrito,
        nif:myRes.nif,
        telefone:myRes.contacto.telefone,
        nome:myRes.nome,
        provincia:myRes.provincia,
        municipio:myRes.municipio,
        type:myRes.type_g,
        comuna:myRes.comuna,
        email:myRes.contacto.email,
        bairro:myRes.bairro,
  
        accountNumber:myRes.accountNumber,
        whatsapp:myRes.contacto.whatsapp,
        rua:myRes.rua,
        foto:null,
        transporte:myRes.transporte
})
     if(myRes.type_g){
      setTimeout(()=>setUserAuthenticate(myRes.type_g),1000)
     
   

     }
  

    }
     }
     else{
      setTimeout(()=>setUserAuthenticate(myRes.type_g),1000)
     }
   
     
      } catch (error) {
        setLoading(false)
        setState(false)
        console.error('Erro ao enviar dados:', error);
  
      }
       

    }
  
      if(userAuthenticate){
        console.log(userAuthenticate)
        if(userAuthenticate=='fazenda'  ){
          setTimeout(()=>HandleUpadte(),300)
          
          redirect(`User/${userAuthenticate}`)

        }
       
      else if(userAuthenticate=='cliente'){
        if(client.type){
          setTimeout(async()=>await login(client.token,'cliente',client),300);
           redirect('User/NUser')
      }
      
      }

}
 
    return(
      <ContainerLogin className='bg-[url("/fazenda.jpg")] bg-center bg-cover min-h-[100vh]' >
            <Title>Login</Title>
            <form onSubmit={HandleLogin} >
                <div className="grid  gap-2 ">
{loading ? (
          // Se estiver carregando, exibe o spinner
        
          <div className="flex justify-center">
            <MoonLoader   color="#333" size={50} />
          </div>
        
        ) : state ? (
          // Se não estiver carregando e o estado for verdadeiro
          <span></span>
        ) : (
          // Se não estiver carregando e o estado for falso
          <p className="text-orange-400 text-center rounded-md p-3 border-sky-500">
            Dados Inválidos!
          </p>
        )}
                  
                  
                  <InputL placeholder="Email:" type="email" name="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}>
                    <AtSignIcon strokeWidth={1.7} className="h-5 text-gray-700"/>
                  </InputL>
                  <InputL  placeholder="Senha:" type="password"  name="password"
                    value={pasword} onChange={({target})=>setpasword(target.value)}>
                    <LockKeyholeIcon strokeWidth={1.7}className="h-5 text-gray-700" />
                  </InputL>
            
                  <div className="flex justify-center">
                    <Link href="/Sign_up" className="text-blue-400">Não tenho uma conta</Link>
                  </div>
                  <div className="grid justify-center">
                    <ButtonG color="bg-orange-300">Entrar</ButtonG>
                  </div>
                </div>
           
            </form>
          </ContainerLogin>
     
    
    )

}