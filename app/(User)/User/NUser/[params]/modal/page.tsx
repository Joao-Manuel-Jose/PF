"use client"
import { Modal } from "@/app/Components/User/Modal/page";
import { useState } from "react";

export  default function ModaUser(){
  const [open,setopen]=useState<boolean>(true)
  function isOpen(){
      setopen(true)
  }
  function isClose(){
    setopen(!true)
}
  
  return(
 <Modal isOpen={!!open} onClose={isClose}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolorem quod eius expedita quisquam, ex tenetur atque! Iure nostrum error aperiam. Sed ipsum, ex ea ullam harum hic veniam sunt.</p>
   </Modal>
   )
}