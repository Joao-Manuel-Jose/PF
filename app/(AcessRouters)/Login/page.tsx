"use client"
import Link  from "next/link";
import { Title } from "@/app/Components/SignUp/title"; 
import styles from './login.module.css'
import { FormEvent, useEffect, useState } from "react";
import LoginUser from "@/app/api/route";
import { redirect } from "next/navigation";
import {  User, client, useAuth } from "@/app/(User)/user";
import { Container } from "../../Components/SignUp/AcessRouter/Container";
import { InputL } from "@/app/Components/Login/input";
import { AtSignIcon,  LockKeyholeIcon } from "lucide-react";
import { ButtonG } from "@/app/Components/Global/button";
import { Fazenda } from "../SignUp/Fazenda/page";



export default function Login(){

   const [userAuthenticate, setUserAuthenticate]=useState('')
   const { login } = useAuth();
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
      fotoGestor:'',
      foto: null,
    });
  
  
   
    async function HandleLogin(e:FormEvent){
      
    e.preventDefault()
    try {
      
     const {token, my}=  await LoginUser({email,pasword});
     const myRes=my
     if(token&&my){
    
      if(my.type_g=='fazenda'){
      setFormData({
        token:myRes.token,
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
        iban:myRes.iban,
        whatsapp:myRes.contacto.whatsapp,
        nomeGestor:myRes.gestor.nome,
        fotoGestor:myRes.gestor.foto,
        rua:myRes.rua,
        foto:null,
        transporte:myRes.transporte
})
     if(formData.type){
      await login(token ,formData.type,undefined,formData);
      await setUserAuthenticate(formData.type)

     }
      
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
  
        iban:myRes.iban,
        whatsapp:myRes.contacto.whatsapp,
        rua:myRes.rua,
        foto:null,
        transporte:myRes.transporte
})
     if(client.type){
      await login(token,client.type,client);
      setUserAuthenticate(client.type)

     }
  

    }
     }
     else{
      setState(false)
     }
   
     
      } catch (error) {
        setState(false)
        console.error('Erro ao enviar dados:', error);
  
      }
       

    }
    useEffect(()=>{
      if(userAuthenticate){
        if(userAuthenticate=='fazenda')
        redirect(`User/${userAuthenticate}`)
      else if(userAuthenticate=='cliente')
      redirect('User/NUser')
      }

    },[userAuthenticate])
 
    return(
      <Container className={styles.bg} >
            <Title>Login</Title>
            <form onSubmit={HandleLogin} >
                <div className="grid  gap-2 ">
               {
                state?<span></span>
                : <p className="text-orange-400 text-center  rounded-md p-3  border-sky-500">Dados Invalidos!</p>
               }
                  
                  
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
          </Container>
     
    
    )

}