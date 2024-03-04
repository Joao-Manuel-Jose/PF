"use client"
import { modalP } from "@/app/(User)/User/NUser/[params]/modal/Fazenda/page";
import { User, useAuth } from "@/app/(User)/user";
import { ButtonG } from "@/app/Components/Global/button";
import { ContainerForm } from "@/app/Components/Global/containerForm";
import { Label } from "@/app/Components/Global/label";

import { Select } from "@/app/Components/Global/select";
import { Textarea } from "@/app/Components/Global/textarea";
import { Input } from "@/app/Components/SignUp/input";
import { ParagraphPf } from "@/app/Components/User/Modal/Perfil/pagrath";

import { InputPf } from "@/app/Components/User/Modal/input";
import { Modal } from "@/app/Components/User/Modal/page";
import { PicUserPf } from "@/app/Components/User/fto";

import { LucideArrowBigRightDash } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";


export  default function ModalPerfil({ isOpen,onClose}:modalP){
   const [provincias, setProvincias] = useState([]);
   const [municipios, setMunicipios] = useState([]);
   const [comuna, setComuna] = useState<string[]>([])
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
      foto:null
   });
    const {user,updateUser,foto}=useAuth()

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
      setUserUpdate(prev=>({
        ...prev,
        [name]: type === 'number' ? Number(value) : value,
        [name]: type === 'boolean' ? Boolean(value) : value,

      }))

    };
    useEffect(() => {
      // Faz a requisição para o servidor para obter a lista de províncias
      // Substitua isso por uma chamada real à API do seu servidor
      setTimeout(()=>{
        fetch('http://localhost:5000/provinces')
        .then(response => response.json())
        .then(data => setProvincias(data))
        .catch(error => console.error('Erro ao obter a lista de províncias:', error));
  
      },1000)
      
    }, []);
    //municipio
    useEffect(() => {
     
      setTimeout(()=>{
        if (userUpadte?.provincia) {
          fetch(`http://localhost:5000/${userUpadte.provincia}/municipio`)
            .then(response => response.json())
            .then(data => setMunicipios(data))
            .catch(error => console.error('Erro ao obter a lista de municípios:', error));
        } else {
          setMunicipios([]); // Se nenhuma província for selecionada, resete a lista de municípios
        }
  
      },200)
  
    }, [userUpadte?.provincia]);
    useEffect(() => {
     
      setTimeout(()=>{
        if (userUpadte?.provincia && userUpadte?.municipio) {
          fetch(`http://localhost:5000/${userUpadte?.provincia}/${userUpadte?.municipio}`)
            .then(response => response.json())
            .then(data => setComuna([...data]))
            .catch(error => console.error('Erro ao obter a lista de municípios:', error));
        } else {
          setComuna([]); // Se nenhuma província for selecionada, resete a lista de municípios
        }
  
      },200)
  
    },  [userUpadte?.municipio,userUpadte?.provincia]);
  
    //End
  //Fazenda
  useEffect(()=>{
    setUserUpdate(prev=>({
      ...prev,...user

    }))
  },[])  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(user?.id){
      const response=await updateUser(userUpadte)
      console.log(response)
      if(response)
        alert('Sucesso')
      else 
      alert(response)

    }
     
  }
    if(user){
  return(

 <Modal isOpen={isOpen} onClose={onClose} title="Perfil" bgImg="bg-[url('/background/bg-social-media.png')] bg-cover bg-center">
  <div className="flex justify-center">
  <Link className="bg-orange-300 px-4 flex text-white py-1 rounded-xl hover:bg-white hover:text-orange-300 hover:ring-1 hover:ring-orange-300" href={`${user.nome}/Upgrade/Dados/`}><LucideArrowBigRightDash/>Outras actualizações  </Link>
  </div>
    
    <section className="grid md:grid-cols-12 items-center ">
   

    <div className="hidden    sm:block relative c md:col-span-3 shadow bg-gray-50 p-3 rounded-2xl mb-3 h-[100%] text-center">
        <div className="flex justify-center mb-2">
            <PicUserPf src={`http://localhost:4000/${foto}`}/>
           
        </div>
        <div className="gridjustify-center rounded-xl gap-2 bg-gray-50 p-3">
        <ParagraphPf>Nome:{user.nome}</ParagraphPf>
        <ParagraphPf>Nif:{user.nif}</ParagraphPf>
        <ParagraphPf>Email:{user.email}</ParagraphPf>
        <ParagraphPf>Provincia:{user.provincia}</ParagraphPf>
        <ParagraphPf>Municipio:{user.municipio}</ParagraphPf>
        <ParagraphPf>Comuna:{user.comuna}</ParagraphPf>
        <ParagraphPf>Bairro:{user.bairro}</ParagraphPf>
        <ParagraphPf>Rua:{user.rua}</ParagraphPf>
        <ParagraphPf>Contacto:{user.telefone}</ParagraphPf>
        </div>
        
      
        
    </div>
   <ContainerForm className="col-span-12 md:col-span-9">
  
      <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-0 md:gap-1 backdrop-blur-sm  opacity-90 ">
      <div className="grid  px-0 md:px-2 py-2  ">
       
         
         <div>
         <Label>Whatsapp</Label>
         <InputPf placeholder="whatsapp:" type="tel" name="whatsapp"  onChange={handleChange} value={userUpadte.whatsapp} />
         </div>
         <div>
           <Label>Possui transporte</Label>
         <Select name="transporte" onChange={handleChange} value={userUpadte.transporte}>
               <option value="" >Transporte?</option>
               <option value='true'>Sim</option>
               <option value='false'>Não</option>
            </Select>
         </div>
        
            <div>
            <Label>Iban</Label>
            <InputPf placeholder="Iban:" type="text" name="iban" value={userUpadte.iban} onChange={handleChange} />
            </div>
            <div>
             <Label>Descrição:</Label>
            <InputPf placeholder="Breve Apresentação:" type="text" name="descricao" value={userUpadte.descricao}  onChange={handleChange} />
            </div>
           
          
            
      </div>
      <div className="grid px-0  md:px-2 py-2  ">
          <div>
          {userUpadte.provincia&&<Label>Província:</Label>}
              <Select  name="provincia" value={userUpadte.provincia} onChange={handleChange}>
                                  <option value="">Selecione a província: </option>
                                  {provincias.map((provincia) => (
                                  <option key={provincia} value={provincia}>
                                                  {provincia}
                                    </option>
                                      ))}
                            

                </Select> 
          </div>
          <div>
         
          {userUpadte.municipio&&<Label>Município:</Label>}
         
             <Select name="municipio" value={userUpadte.municipio} onChange={handleChange} disabled={!user.provincia}>
                        <option value="">Selecione o Município: </option>
                        {municipios.map((municipio) => (
                          <option key={municipio} value={municipio}>
                            {municipio}
                          </option>
                           ))
                        }
                       

              </Select>
                  
          </div>                      
     
          <div>
          {userUpadte.comuna&&<Label>Comuna:</Label>}
          <Select name="comuna" value={userUpadte.comuna} onChange={handleChange} disabled={!user.provincia || !user.municipio}>
                        <option value="">Selecione a comuna: </option>
                        {comuna.map((comuna) => (
                          <option key={comuna} value={comuna}>
                            {comuna}
                          </option>
                               ))
                        }
                       

          </Select>

          </div>
          <div>
          {<Label>Distrito:</Label>}
          <InputPf placeholder="Distrito: " type="text"  name="distrito" value={userUpadte.distrito} onChange={handleChange} />
          </div> 
         
                     
                    
          
           
                
                     
        
                    
                   
                   
                   
         </div>
       
         </div>
         <div className="flex justify-center">
         <ButtonG color="bg-orange-300" disabled={
          user.descricao===userUpadte.descricao && user.iban===userUpadte.iban&&
          user.transporte===userUpadte.transporte && user.whatsapp===userUpadte.whatsapp&&
         user.distrito===userUpadte.distrito&&
          user.provincia===userUpadte.provincia && user.municipio===userUpadte.municipio&&
          user.comuna===userUpadte.comuna
         } >Inserir</ButtonG>
         </div>
         </form>
   </ContainerForm>
   </section>
   </Modal>
   )
}
}