"use client"
import {useState, useEffect} from 'react'
import { FormEvent } from 'react'

import { Button } from "./button"
import { Input } from "./input"
import { Select } from "./select"
import { Title } from "./title"
import { json } from 'stream/consumers'
import styles from './sign.module.css'

export default function SignUp(){
 const [data, setdata]=useState([
  {
    id:0,
    tarefa:'',
    descricao:''
  }
 ])
/* useEffect(()=>{
  fetch('http://localhost:4000/tarefas').then(res=> res.json()
  .then(json=> setdata(json)
  )
  )


 },[])
 async function handleSubmit(event:FormEvent<HTMLFormElement>){
  event.preventDefault()
  const dados=new FormData(event.currentTarget)
  const response=await fetch('http://localhost:4000/novaTarefa',
  {
    method:'POST',
    body:dados,
  }
  

  )
    console.log(dados)

 }*/
    return(
      
     <div className={styles.bunner}>
              <div className="flex items-center justify-center">
              <div className="z-30 backdrop-blur-sm  md:w-[50%] grid items-center py-20 md:px-5 px-2 mt-20 bg-transparent mx-2 md:mx-14 
         border border-gray-500 rounded-2xl shadow-xl ">
      
        <Title>Cadastrar Fazenda</Title>
            <form action=" " >
                <div className="grid md:grid-cols-2 gap-4 items-center ">

              
            <Input  placeholder="Nome: " type="text" name='nome' />
            <Input placeholder="descricao:" type="text" name='descricao' />
            <Input placeholder="NIF:" type="text" name='nif' />
         
         <Input placeholder="Telefone: " type="tel" />
           
       
          <Input placeholder="Email:" type="email"/>
           
          
            <div className="d-flex">
            <label className="text-right">Escolha uma foto:   </label>
           <Input type="file" accept="image/*"/>
           </div>
         
       
          <Select >
            <option value="">Selecione a província: </option>
            <option value="BG">Bengo </option>
            <option value="Bié">Bié </option>

          </Select> 
                </div>
                <Button type="submit" >Enviar</Button>
             
            </form>

            </div>
        </div>
        </div>
   
    )

}