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
 useEffect(()=>{
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

 }
    return(
      
     <div className={styles.bunner}>
        <div className="grid items-center  my-20 mx-10 bg-transparent mt-5 mx-14  p-5
        
        rounded-lg">
      
        <Title>Cadstrar Fazenda</Title>
            <form action=" " onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 items-center ">

              
            <Input  placeholder="tarefa: " type="text" name='tarefa' />
            <Input placeholder="descricao:" type="text" name='descricao' />
            <Input placeholder="responsavel:" type="text" name='responsavel' />
         
         { /*  <Input placeholder="Telefone: " type="tel" />
           
       
          <Input placeholder="Email:" type="email"/>
           
          
            <div className="d-flex">
            <label className="text-right">Escolha uma foto:   </label>
           <Input type="file" accept="image/*"/>
           </div>
         
       
          <Select >
            <option value="">Selecione a província: </option>
            <option value="BG">Bengo </option>
            <option value="Bié">Bié </option>

          </Select> */}
                </div>
                <Button type="submit" >Enviar</Button>
             
            </form>


        </div>
        </div>
   
    )

}