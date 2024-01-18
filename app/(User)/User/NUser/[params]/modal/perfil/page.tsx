"use client"
import { Modal } from "@/app/Components/User/Modal/page";
import { useState } from "react";
import { modalP } from "../Fazenda/page";

export  default function ModalPerfil({ isOpen,onClose}:modalP){

  
  return(
 <Modal isOpen={isOpen} onClose={onClose} title="Perfil">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem quod eius expedita quisquam, ex tenetur atque! Iure nostrum error aperiam. Sed ipsum, ex ea ullam harum hic veniam sunt.</p>
   </Modal>
   )
}