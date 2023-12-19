"use client"
import {useState, useEffect} from 'react'
import { FormEvent } from 'react'
import { CardLink } from './CardLink'
import { Buttons } from "./button"

import { Title } from "./title"


import  styles from './bd.module.css'
export default function SignUp(){
  const cadastros = [
    { title: 'Fazenda', iconClass: '/IconCad/fazenda.png', link:'/Sign_up/Fazenda' },
    { title: 'Transportadora', iconClass: '/IconCad/transporte.png' ,link:'/Sign_up/Transportadora' },
    { title: 'Produtor', iconClass: '/IconCad/produtor.png', link:'/Sign_up/Produtor' },
    { title: 'Comprador', iconClass: '/IconCad/client.png', link:'/Sign_up/Comprador' }
    // Adicione mais cadastros conforme necessário
  ];
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

    return(<div className=''>
              <Title>Cadastrar</Title>
          <div className="flex justify-center items-center mb-10 ">
            
            <div className="grid md:grid-cols-2 justify-center gap-8">
                {cadastros.map((cadastro, index) => (
                <CardLink key={index} title={cadastro.title} iconSrc={cadastro.iconClass} link={cadastro.link}/>
                     ))}
            </div>
          </div>
       </div>
     
      
    /* <div className={styles.bunner}>
          <div className="flex items-center justify-center py-20">
          <div className="z-30 backdrop-blur-sm  md:w-[70%] grid items-center p-10  md:px-5 px-2 mt-20 bg-transparent mx-2 md:mx-14 
         border border-gray-500 rounded-2xl shadow-xl ">
      
        <Title>Cadastrar Fazenda</Title>
            <form action=" " >
              <div className="grid md:grid-cols-2 gap-4  ">

              
                      <Input  placeholder="Nome: " type="text" name='nome' />
                      <Input placeholder="descricao:" type="text" name='descricao' />
                      <Input placeholder="NIF:" type="text" name='nif' />
                  
                      <Input placeholder="Telefone: " type="tel" />
                    
                
                    <Input placeholder="Email:" type="email"/>
                    
          
                      <Input type="file" accept="image/*"/>
                  
         
       
                      <Select >
                        <option value="">Selecione a província: </option>
                        <option value="BG">Bengo </option>
                        <option value="Bié">Bié </option>

                      </Select> 
              </div>
              <div className="flex justify-center">
                       <Buttons type="submit">Enviar</Buttons>
              </div>
             
            </form>

            </div>
        </div>
        </div>*/
   
    )

}