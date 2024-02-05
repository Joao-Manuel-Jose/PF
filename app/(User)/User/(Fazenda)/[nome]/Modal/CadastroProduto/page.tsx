"use client"
import { modalP } from "@/app/(User)/User/NUser/[params]/modal/Fazenda/page";
import { ButtonG } from "@/app/Components/Global/button";
import { ContainerForm } from "@/app/Components/Global/containerForm";
import { LabelSignUp } from "@/app/Components/Global/labelSignUp";
import { Select } from "@/app/Components/Global/select";
import { Textarea } from "@/app/Components/Global/textarea";
import { Input } from "@/app/Components/SignUp/input";
import { Modal } from "@/app/Components/User/Modal/page";
import { useState } from "react";


export  default function ModalCadProduto({ isOpen,onClose}:modalP){

  
  return(
 <Modal isOpen={isOpen} onClose={onClose} title="Inserir Produtos" bgImg="bg-[url('/background/b-1.jpg')]">
   <ContainerForm className="bg-url('/background/comprador.jpg')">
      <form action="">
      <div className="grid md:grid-cols-2 gap-1   ">
      <div className="grid  gap-3 px-4 py-4  ">
         <Input placeholder="Nome" type="text" />
         <Input placeholder="Preço:" type="number" />
         <Input placeholder="Quantidade de saida" type="number" min={50} />
         <Input placeholder="Quantidade em stock" type="number" min={50} />
      </div>
         <div className="grid  gap-5 px-4 py-4  ">
            <Select >
               <option value="">Selecione a qualidade</option>
            </Select>
            <Select >
               <option value="">Selecione a categoria</option>
            </Select>
            <LabelSignUp htmlFor="foto"><span>Foto:não selecionada</span></LabelSignUp>
            <Input type="file" id="foto" className="hidden"   title="Insira a sua foto" name="foto"  accept="image/*"  />
           <Textarea placeholder="Descrição:" required />
         </div>
       
         </div>
         <div className="flex justify-center">
         <ButtonG color="bg-orange-300">Inserir</ButtonG>
         </div>
         </form>
   </ContainerForm>
   </Modal>
   )
}