'use client'
import { useAuth } from "@/app/(User)/user";
import { ButtonG } from "@/app/Components/Global/button";
import { InputG } from "@/app/Components/Global/input";
import { Input } from "@/app/Components/SignUp/input";
import { DeleteCountFAzenda, UpdateFAzenPassword } from "@/app/api/Fazenda/route";
import { LucideSendHorizontal } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2"
const showAlert = () => {
  Swal.fire({
    title: 'sucesso',
    text: 'Password atualizada',
    icon: 'success', // ou 'success', 'warning', 'error', 'question'
  });
}
const showAlertError = () => {
  Swal.fire({
    title: 'Erro',
    text: 'Password não  atualizada',
    confirmButtonColor: '#3085d6',
    icon: 'error', // ou 'success', 'warning', 'error', 'question'
  });
}
interface UpPass{
  oldpassword:string,
  newPassword:string,
  
}
interface DeletCOunt{
  pasword:string,
  toDelete:boolean
  
}

export default function Password(){
  const {user}=useAuth()
  const [formadata,setFormadata]=useState<UpPass>({
    newPassword:'',
    oldpassword:''

  })
  const [deleteCount,setDeleteCount]=useState<DeletCOunt>({
    pasword:'',
    toDelete:false
  })

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
      setFormadata(prev=>({
        ...prev,
       [name]:value

      }))

    };
    function handleChangeP(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
      const { name, value, type } = e.target;
        setDeleteCount(prev=>({
          ...prev,
         [name]:value
  
        }))
  
      };
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(user?.id){
        const response=await UpdateFAzenPassword(formadata,user.id)
        if(response)
        setTimeout(showAlert, 200)
       
        else 
        setTimeout(showAlertError,200)
  
      }
       
    }
    const handleSubmitPasword = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(user?.id){
        const response=await DeleteCountFAzenda(deleteCount,user.id)
        if(response)
        setTimeout(showAlert, 200)
       
        else 
        setTimeout(showAlertError,200)
  
      }
       
    }
    const showConfirmationModal = async () => {
      const result = await Swal.fire({
        title: 'Você tem certeza?',
        text: 'Após 30 dias a sua conta será eliminada permanentemente!!',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!',
        cancelButtonText: 'Cancelar',
      });
    
      if (result.isConfirmed) {
        await setDeleteCount(prev=>({
          ...prev,
          toDelete:true
        }))
        Swal.fire('Insira!', 'A password para poder deletar a conta', 'info');
      } else {
        // Lógica a ser executada se o usuário cancelar
        Swal.fire('Cancelado', 'Seu arquivo está seguro :)', 'info');
      }
    };
    return(
        <>
        <h1>Password</h1>
        <section className="bg-sky-100 p-2 py-10 md:p-4 w-full md:w-[60%] mx-auto  rounded-lg">
            <form onSubmit={handleSubmit} className="mt-3 grid gap-4 justify-center md:justify-start">
                <Input placeholder="Password Actual:"  name="oldpassword" value={formadata.oldpassword} onChange={handleChange}/>
                <Input placeholder="Nova Password:" name="newPassword" value={formadata.newPassword} onChange={handleChange}/>
                <div className="flex justify-center">
                <ButtonG color="bg-orange-300 mt-2" type="submit"><LucideSendHorizontal/></ButtonG>
            </div>
                
            </form>
        </section>
        <hr className="mt-2 mb-5"/>
        <div className="flex justify-center">
             {!deleteCount.toDelete &&   <ButtonG color="bg-red-300 mt-2" type="submit" onClick={showConfirmationModal}>Eliminar conta</ButtonG>}
            </div>
        {
          deleteCount.toDelete &&
          <section className="mt-2 bg-sky-100 p-2 py-10 md:p-4 w-full md:w-[60%] mx-auto  rounded-lg">

     
        
          <form  className="mt-3 grid gap-4 justify-center md:justify-start" onSubmit={handleSubmitPasword}>
                <Input placeholder="Password:"  name="pasword" value={deleteCount.pasword} onChange={handleChangeP} />
              
                <div className="flex justify-center">
                <ButtonG color="bg-orange-300 mt-2" type="submit">Enviar</ButtonG>
            </div>
                
            </form>
        </section>}
        
        
        </>

    )
}