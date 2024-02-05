"use client"
import { modalP } from "@/app/(User)/User/NUser/[params]/modal/Fazenda/page";
import { useAuth } from "@/app/(User)/user";
import { ButtonG } from "@/app/Components/Global/button";
import { ContainerForm } from "@/app/Components/Global/containerForm";
import { LabelSignUp } from "@/app/Components/Global/labelSignUp";
import { Select } from "@/app/Components/Global/select";
import { Textarea } from "@/app/Components/Global/textarea";
import { Input } from "@/app/Components/SignUp/input";
import { ParagraphPf } from "@/app/Components/User/Modal/Perfil/pagrath";
import { ButtonPf } from "@/app/Components/User/Modal/button";
import { InputPf } from "@/app/Components/User/Modal/input";
import { Modal } from "@/app/Components/User/Modal/page";
import { PicUser, PicUserPf } from "@/app/Components/User/fto";
import { useState } from "react";


export  default function ModalPerfil({ isOpen,onClose}:modalP){

    const {user}=useAuth()
  return(
 <Modal isOpen={isOpen} onClose={onClose} title="Perfil" bgImg="bg-[url('/background/perfil.jpg')] bg-cover bg-center">
    <section className="grid md:grid-cols-12 items-center ">


    <div className="hidden sm:block relative c md:col-span-3 shadow bg-gray-50 p-3 rounded-2xl mb-3 h-[100%] text-center">
        <div className="flex justify-center mb-2">
            <PicUserPf src={`http://localhost:4000/${user?.fto}`}/>
           
        </div>
        <div className="grid justify-center rounded-xl gap-2 bg-gray-50 p-3">
        <ParagraphPf>Nome:{user?.nome}</ParagraphPf>
        <ParagraphPf>Nif:{user?.nif}</ParagraphPf>
        <ParagraphPf>Email:{user?.email}</ParagraphPf>
        <ParagraphPf>Provincia:{user?.provincia}</ParagraphPf>
        <ParagraphPf>Municipio:{user?.municipio}</ParagraphPf>
        <ParagraphPf>Comuna:{user?.comuna}</ParagraphPf>
        <ParagraphPf>Bairro:{user?.bairro}</ParagraphPf>
        <ParagraphPf>Rua:{user?.rua}</ParagraphPf>
        <ParagraphPf>Contacto:{user?.telefone}</ParagraphPf>
        </div>
        
        <div className="hidden md:block absolute bottom-1 mx-auto">
         <div className=" grid grid-cols-1  justify-center text-center">
         <ButtonPf color="bg-green-300">Actualizar gestor</ButtonPf>
        <ButtonPf color="bg-orange-300">Eliminar Conta</ButtonPf>
         </div>
        
        </div>
        
    </div>
   <ContainerForm className="col-span-12 md:col-span-9">
  
      <form action="">
      <div className="grid md:grid-cols-2 gap-1 backdrop-blur-sm  opacity-90 ">
      <div className="grid  gap-3 px-4 py-4  ">
         <InputPf placeholder="Nome" type="text" value={user?.nome} />
         <InputPf placeholder="Contacto:" type="number" />
         <InputPf placeholder="Emai:" type="email" value={user?.email}  />
         <InputPf placeholder="Quantidade em stock" type="number" min={50} />
      </div>
         <div className="grid  gap-5 px-4 py-4  ">
            <Select >
               <option value="">Selecione a qualidade</option>
            </Select>
            <Select >
               <option value="">Selecione a categoria</option>
            </Select>
            <LabelSignUp htmlFor="foto"><span>Foto:não selecionada</span></LabelSignUp>
            <InputPf type="file" id="foto" className="hidden"   title="Insira a sua foto" name="foto"  accept="image/*"  />
           <Textarea placeholder="Bibliografia:" required />
         </div>
       
         </div>
         <div className="flex justify-center">
         <ButtonG color="bg-orange-300">Inserir</ButtonG>
         </div>
         </form>
   </ContainerForm>
   </section>
   </Modal>
   )
}