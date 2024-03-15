"use client"
import { modalP } from "@/app/(User)/User/NUser/modal/Fazenda/page";
import { User, useAuth } from "@/app/(User)/user";
import { ButtonG } from "@/app/Components/Global/button";
import { ContainerForm } from "@/app/Components/Global/containerForm";
import { Label } from "@/app/Components/Global/label";

import { Select } from "@/app/Components/Global/select";
import { Textarea } from "@/app/Components/Global/textarea";
import { TitlePublic } from "@/app/Components/Global/titlep";
import { Input } from "@/app/Components/SignUp/input";
import { ParagraphPf } from "@/app/Components/User/Modal/Perfil/pagrath";

import { InputPf } from "@/app/Components/User/Modal/input";
import { Modal } from "@/app/Components/User/Modal/page";
import { PicUserPf } from "@/app/Components/User/fto";
import { CreateAgriMoney } from "@/app/api/Fazenda/route";

import { LucideArrowBigRightDash } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";


export  default function ModalPayment({ isOpen,onClose}:modalP){
    
   const [userUpadte, setUserUpdate] = useState<User>({
      fto:'',
      nif: '',
      descricao:'',
      whatsapp:0,
      transporte:false,
      distrito:'',
      telefone:'',
      nome: '',
      provincia: '',
      municipio: '',
      comuna:'',
      email:'',
      accountNumber:'',
      bairro: '',
      rua: '',
      foto:null
   });
   const [password,setPassword]=useState('')
    const {user,updateUser}=useAuth()

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
      setUserUpdate(prev=>({
        ...prev,
        [name]: type === 'number' ? Number(value) : value,
        [name]: type === 'boolean' ? Boolean(value) : value,

      }))

    };
    useEffect(()=>{
        setUserUpdate(prev=>({
          ...prev,...user
    
        }))
      },[user ])  
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(user?.id){

    const res=await CreateAgriMoney(userUpadte.nome,password,userUpadte.email)

      
      if(res){
       await setUserUpdate((prev)=>({
            ...prev,
            accountNumber:res

        }))
    const response=await updateUser(userUpadte)

    Swal.fire({
        title:'Sucesso',
        text:`Nº de conta: ${res}`,
        icon:'success'
        
    })

      }
        
      else {
        Swal.fire({
            title:'Erro',
            text:`Não foi possível criar a conta!!`,
            icon:'error'
            
        })

      }
      

    }
     
  }
    if(user){
  return(

 <Modal isOpen={isOpen} onClose={onClose} title="Pagamento" bgImg="bg-[url('/background/bg-c.jpg')] bg-cover bg-center">
  
    
         
  <section className="flex items-center justify-center py-10 w-[100%]">
                <div className='  grid  md:grid-cols-12 gp-0 md:gap-8
                 rounded-2xl  px-4'>
                  <div className="hidden md:block col-span-3 mt-3 p-auto">
                    < p className="text-4xl font-bold text-white">AGROCLICK</p>
                      <h1 className="uppercase font-bold text-white">Crie a sua Conta-Money </h1>
                      <hr className="mx-auto bg-green-500  border"/>
                      <p className=" text-md text-center font-bold text-sky-400">Assim poderás vender os teu produtos, e ter o teu dinheiro de forma segura !</p>
                      <p className="bg-gray-50 p-3 rounded-xl font-semibold">Confirme os teus dados,e obterás o teu nº de conta!!</p>
                  </div>
                  

                  <form onSubmit={handleSubmit} encType="multipart/form-data" className="ms-auto col-span-12 md:col-span-9 justify-center items-center  bg-gray-50 p-5
                    rounded-3xl">
                        <p className="text-center text-xl font-semibold text-sky-400">Criar Agro-Money</p>
                          <div className="grid  gap-1  ">
                            <div>
                                <Label>Nome</Label><br/>
                                <Input placeholder="Nome" type="text" name="nome" value={userUpadte.nome}  onChange={handleChange} />
                            </div>
                            <div>
                            <Label>Email </Label><br/>
                            <Input placeholder="Email:" type="email" value={userUpadte.email}  onChange={handleChange} name="email" />
                            </div>
                            <div>
                                <Label>Password para conta-money</Label><br/>
                                <Input placeholder="Password:" type="text" name="password" value={password} onChange={({target})=>setPassword(target.value)} />
                            </div>
                            
                        </div>
                        <div className="flex justify-center mt-3">
                            <ButtonG color="bg-orange-300" type="submit" disabled={user.accountNumber?true:false}>Inserir</ButtonG>
         </div>
                        
                </form>
   
                </div>

  
   </section>
   </Modal>
   )
  }
}