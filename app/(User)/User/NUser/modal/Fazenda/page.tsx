"use client"
import { Modal } from "@/app/Components/User/Modal/page";
import { useState } from "react";
import { modalProps } from "@/app/Components/User/Modal/page";
export type modalP=Omit<modalProps,'children' | 'title'>

export  default function ModalFazenda({ isOpen,onClose}:modalP){

  
  return(
 <Modal isOpen={isOpen} onClose={onClose} title="Fazenda">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem quod eius expedita quisquam, ex tenetur atque! Iure nostrum error aperiam. Sed ipsum, ex ea ullam harum hic veniam sunt.</p>
   </Modal>
   )
}