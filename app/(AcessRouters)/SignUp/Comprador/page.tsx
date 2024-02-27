"use client"

import { Input } from "@/app/Components/SignUp/input";
 
import { Title } from "@/app/Components/SignUp/title";
import styles from './comprador.module.css'
import Link from "next/link";
import { Container } from "../../../Components/SignUp/AcessRouter/Container";
import { LabelSignUp } from "@/app/Components/Global/labelSignUp";
import { ChangeEvent, FormEvent, useState } from "react";
import { FormData } from "../Fazenda/page";
import { ButtonG } from "@/app/Components/Global/button";
import { cadastrarClient} from "@/app/api/Cadastro/route";
import { client, useAuth } from "@/app/(User)/user";
import { redirect } from "next/navigation";
interface clientResponse{
  nome:string,
  id:number,
  foto:string,
  type_g:string
}

export default function Comprador(){
  const [userAuthenticate, setUserAuthenticate]=useState('')
  const {  login } = useAuth();
  const[sucessFazenda, setSucessFazenda]=useState<boolean>(false)
  const [formData, setFormData] = useState<client>({
   id:0,
    token:'',
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
    pasword:'',
    foto: null,
  });
  if(userAuthenticate){
    redirect('../../User/NUser')
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          foto: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleLogin=async ()=>{
      try{
        if(formData.token )
        await login(formData.token,'cliente',formData,undefined)
        setTimeout(()=>setUserAuthenticate(formData.fto),300)
        console.log('sucesso cliente')
      }catch(error){
        alert(error)

      }
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const {token,my} = await cadastrarClient(formData);
      const myRes:clientResponse=my
    
      if(token&&my){
        setFormData(prev=>({
          ...prev,
          id:myRes.id,
          fto:myRes.foto,
          token:token,
          type:myRes.type_g

        }))
       
        console.log('mystate',formData)
        setSucessFazenda(true)
       
      
     

      }
   

      
    } catch (error) {
      alert(error);
      console.error(error);

    }
  };
    return(

      <Container className={styles.bunner} >
        {sucessFazenda?
        <>
         <Title>Parabéns e bem vindo/a!!</Title>
         <div className="flex justify-center">
         <ButtonG color="bg-sky-300" onClick={handleLogin}>Entrar</ButtonG>
              </div>
        
        </>
      :<>
        <Title>Comprador</Title>
            <form onSubmit={handleSubmit} >
               
              <div className="grid  gap-4   ">

              <Input  placeholder="Nome: " type="text" name='nome' value={formData.nome} onChange={handleChange}/>
              
              <Input type="file" id="foto" className="hidden"    accept="image/*" name="foto" onChange={handleFileChange} required={false} />
                   
                   
                   <Input placeholder="Contacto:" type="tel"  value={formData.telefone} onChange={handleChange} name='telefone'  pattern="[0-9]{9}" title="O número deve conter 9digitos"  />
                   <Input placeholder="Email:" type="email"  value={formData.email} onChange={handleChange} name='email' />
                   <LabelSignUp htmlFor="foto">Foto:{formData.foto?<span >selecionada</span>: <span > não selecionada</span>}</LabelSignUp> 
        
                    
                    
                
                  
                    <Input placeholder="Palavra-passe" type="password" value={formData.pasword} name="pasword"  onChange={handleChange} />
                   
                    <Link href="/Login" className="text-center  text-blue-400">Já tenho uma conta</Link>
              </div>
            
              <div className="flex justify-center">
                       <ButtonG color="bg-orange-300" type="submit">Enviar</ButtonG>
              </div>
             
            </form>
            </>
            }
           </Container>
    )

}