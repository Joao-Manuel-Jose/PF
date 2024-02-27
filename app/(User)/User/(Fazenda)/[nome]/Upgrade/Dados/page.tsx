'use client'

import { User, api, useAuth } from "@/app/(User)/user"
import { ButtonG } from "@/app/Components/Global/button"
import { Label } from "@/app/Components/Global/label"
import { LabelSignUp } from "@/app/Components/Global/labelSignUp"
import { Select } from "@/app/Components/Global/select"
import { InputPf } from "@/app/Components/User/Modal/input"
import { PicUser } from "@/app/Components/User/fto"
import { UpdateFAzendafoto } from "@/app/api/Fazenda/route"
import { LucideSendHorizonal } from "lucide-react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Swal from "sweetalert2"
const showAlert = () => {
  Swal.fire({
    title: 'sucesso',
    text: 'foto atualizada',
    icon: 'success', // ou 'success', 'warning', 'error', 'question'
  });
}
const showAlertError = () => {
  Swal.fire({
    title: 'Erro',
    text: 'foto não  atualizada',
    confirmButtonColor: '#3085d6',
    icon: 'error', // ou 'success', 'warning', 'error', 'question'
  });
}
const showAlertUser = () => {
  Swal.fire({
    title: 'sucesso',
    text: 'Usuário actualizado',
    icon: 'success', // ou 'success', 'warning', 'error', 'question'
  });
}
const showAlertErrorUser = () => {
  Swal.fire({
    title: 'Erro',
    text: 'Usuário não  atualizada',
    confirmButtonColor: '#3085d6',
    icon: 'error', // ou 'success', 'warning', 'error', 'question'
  });
}
export default function Dados(){

    const {user, updateUserPhoto,updateUser}=useAuth()
    

  
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
      iban:'',
      bairro: '',
      rua: '',
      nomeGestor:'',
      foto:null
     });
     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
    
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setUserUpdate((prevData) => ({
              ...prevData,
              foto: file
            }));
          };
          console.log(userUpadte.foto)
          reader.readAsDataURL(file);
          
        }
      };
     useEffect(()=>{
        setUserUpdate(prev=>({
          ...prev,...user
    
        }))
      },[user])
      const handleSubmitPhoto= async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(user?.id){
          try {
            const response = await UpdateFAzendafoto(userUpadte, user.id);
            setUserUpdate(prev=>({
              ...prev,
              foto:null
        
            }))
            if (response) {
               
          
            const up = await updateUserPhoto(String(response));
            if(up){
              setTimeout(showAlert, 300)
     
            }
            
            }
            else showAlertError()
          } catch (error) {
            setTimeout(showAlertError,300)
           
            console.error(error);
          
          }
          
      }
      
         
      }
      
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
      const { name, value, type } = e.target;
        setUserUpdate(prev=>({
          ...prev,
          [name]: type === 'number' ? Number(value) : value,
          [name]: type === 'boolean' ? Boolean(value) : value,
  
        }))
  
      };
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(user?.id){
          const response=await updateUser(userUpadte)
          if(response)
          setTimeout(showAlertUser, 700)
          else 
          setTimeout(showAlertErrorUser, 700)
    
        }
         
      }
if(user){
    return(
        <>
        <h1 className="uppercase text-center text-sky-300">Dados Pessoais</h1>
        <section className="grid mt-4">
            <div>
            {/*<PicUser src={`${api}/${user?.fto}`} />*/}
            </div>
            <div className="">
            <h2 className="text-sm my-2 uppercase">Actualizar foto</h2>
            
           <form onSubmit={handleSubmitPhoto} className="w-auto md:w-60 mx-2 md:mx-0 " encType="multipart/form-data">
            <LabelSignUp htmlFor="foto">Foto:{userUpadte.foto?<span>Selecionada</span>: <span>Não selecionada</span>}</LabelSignUp>
            <InputPf type="file" accept="image/*" id="foto" className="hidden" name="foto" onChange={handleFileChange} />
            <div>
                <ButtonG color="bg-orange-300 mt-2" type="submit"><LucideSendHorizonal/></ButtonG>
            </div>
           </form>
           <hr className="mt-2"/>
           </div>
           <h3 className="mt-3 uppercase text-sm"> Informações </h3>
           <div className="mt-4 p-3 bg-gray-50 rounded-xl">
        
           <form  onSubmit={handleSubmit} className="mt-3 grid gap-4 justify-center md:justify-start">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div>
                  <Label htmlFor="nome">Nome</Label>
                <InputPf id="nome" placeholder="Nome:" type="text" name="nome" value={userUpadte.nome} onChange={handleChange}/>
                </div>
                <div>
                <Label htmlFor="email">Email</Label>
                  <InputPf placeholder="Email:" type="email" name="email" id="email" value={userUpadte.email} onChange={handleChange}/>
                </div>
                <div>
                  <Label htmlFor="tel">Telefone</Label>
                <InputPf id="tel" placeholder="Telefone:" type="text" name="telefone" value={userUpadte.telefone} onChange={handleChange}/>
                </div>
                <div>
                  <Label htmlFor="wtsp">Watsapp</Label>
                <InputPf id="wtsp" placeholder="Watsapp:" type="tel" name="whatsapp" value={userUpadte.whatsapp} onChange={handleChange} />

                </div>
                <div>
                  <Label htmlFor="iban">Iban</Label>
                <InputPf id="iban" placeholder="Iban:" type="text" name="iban" value={userUpadte.iban} onChange={handleChange} />

                </div>
                <div>
                  <Label htmlFor="descricao">Breve Descrição</Label>
                <InputPf id="descricao" placeholder="Descrição:" type="text" name="descricao" value={userUpadte.descricao} onChange={handleChange} />

                </div>
                <div>
                  <Label htmlFor="nomeGestor">Nome do gestor</Label>
                <InputPf id="nomeGestor" placeholder="Nome do Gestor:" type="text" name="nomeGestor" value={userUpadte.nomeGestor} onChange={handleChange} />

                </div>
                <div>
           <Label>Possui transporte</Label>
         <Select name="transporte" onChange={handleChange} value={String(userUpadte.transporte)}>
               <option value="" >Transporte?</option>
               <option value='true'>Sim</option>
               <option value='false'>Não</option>
            </Select>
         </div>
                
              
               
            </div>
                <div className="flex justify-center">
                <ButtonG color="bg-orange-300 mt-2" type="submit"
                disabled={userUpadte.nome===user.nome&&userUpadte.email===user.email&&
                  userUpadte.telefone===user.telefone&&userUpadte.whatsapp===user.whatsapp&&
                  userUpadte.iban===user.iban&&userUpadte.descricao===user.descricao&&
                  userUpadte.transporte===user.transporte&&userUpadte.nomeGestor===user.nomeGestor
                }
                >Actualizar
                </ButtonG>
            </div>
            </form>
         
           </div>
           <hr className="mt-2"/>
           
        
        </section>
        </>

    )
}
}