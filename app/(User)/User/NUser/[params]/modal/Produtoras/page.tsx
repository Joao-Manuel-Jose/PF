"use client"
import { Modal } from "@/app/Components/User/Modal/page";
import { useState } from "react";
import { modalP } from "../Fazenda/page";

export  default function ModalProdutoras({ isOpen,onClose}:modalP){

  
  return(
 <Modal isOpen={isOpen} onClose={onClose} title="Produtora">
    <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Eligendi
         vitae fugiat architecto repudiandae atque e
         t laboriosam facere quaerat explicabo dicta,
          quo, minima neque nulla voluptates laudantium
           eos veritatis corporis odio! Necessitatibus,
            excepturi! Ratione beatae omnis dolore illum aut, 
            voluptatibus eveniet natus similique velit vitae 
            tenetur modi reiciendis nam consequuntur dolor 
            voluptates maiores veritatis optio corrupti quia 
            quidem repellat adipisci! Quos, sapiente. Dolorem,
             maxime qui inventore in voluptatum deleniti autem
              eligendi vero earum perspiciatis aperiam saepe 
              id quisquam voluptas? Aliquid in quo voluptatibus 
              reiciendis, assumenda dolorum veritatis est quos 
              placeat voluptatum optio quod 
        fugit fuga dolorem cupiditate
         sequi officiis hic atque.</p>
   </Modal>
   )
}