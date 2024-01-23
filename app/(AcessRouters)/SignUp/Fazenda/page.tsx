"use client"
import { Buttons } from "../button";
import styles from './fazenda.module.css';
import Link from "next/link";
import { Container } from "../Container";
import { Input } from "@/app/(RotasPublicas)/Sign_up/input";
import { Select } from "@/app/(RotasPublicas)/Sign_up/select";
import { Title } from "@/app/(RotasPublicas)/Sign_up/title";
import { useState, ChangeEvent, FormEvent } from 'react';

import {  LabelSignUp } from "@/app/(RotasPublicas)/Sign_up/label";
import { ButtonG } from "@/app/Components/Global/button";
import { cadastrarFazenda } from "@/app/api/Cadastro/route";

export interface FormData {
  nif: string;
  iban: string;
  transporte: boolean,
  telefone:string,
  nome: string;
  provincia: string;
  municipio: string;
  comuna:string,
  bairro: string;
  rua: string;
  foto: File | null;
}
export interface GestorData{
  nome:string,
  email:string,
  foto: File | null,
  pasword:string
}
export default function Fazenda() {

   const[sucessFazenda, setSucessFazenda]=useState<boolean>(false)
   const[gestorData,setGestorData]=useState<GestorData>({
    nome:'',
    email:'',
    pasword:'',
    foto:null
   })
  const [formData, setFormData] = useState<FormData>({
    nif: '',
    iban: '',
    transporte: false,
    nome: '',
    provincia: '',
    municipio: '',
    comuna:'',
    telefone:'',
    bairro: '',
    rua: '',
    foto: null,
  });
//Fazenda
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          foto: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await cadastrarFazenda(formData);
      console.log(response);
      if(response){
        setSucessFazenda(true)
     

      }
   

      
    } catch (error) {
      alert('Dados Invalidos');
      console.error(error);

    }
  };

  //gestor
  function handleChangeGestor(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
    const { name, value, type } = e.target;

    setGestorData((prevData) => ({
      ...prevData,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };
  function handleFileChangeGestor(e: ChangeEvent<HTMLInputElement>){
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          foto: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  async function  handleSubmitGestor(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    try {
      const response = await cadastrarFazenda(formData);
      console.log(response)
      if(response){
        setSucessFazenda(true)
     
     

      }
   

      
    } catch (error) {
      alert(error);
      console.error(error);

    }
  };


  

  {/*const cadastrarFazenda = async (formData: FormData) => {
    const endpoint = 'http://localhost:4000/cadastro'; // Substitua com sua rota de cadastro real

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'foto' && value) {
        formDataToSend.append(key, value as File, (value as File).name);
      } else {
        formDataToSend.append(key, value.toString());
      }
    });

    const response = await fetch(endpoint, {
      method: 'POST',
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar fazenda');
    }

    return response.json();
  };*/}

  return (
      <Container className={styles.bunner} >
        {sucessFazenda?
        <>
        <p className="text-orange-400 bg.white rounded-md p-3  border-sky-500">Passo-2!</p>
        
        <Title> Cadastre o Gestor</Title>
        
        <form onSubmit={handleSubmitGestor} encType="multipart/form-data">
        <div className="grid  gap-5 px-4 py-4  ">
             
                  <Input  placeholder="Nome: " type="text" name='nome' value={gestorData.nome} onChange={handleChangeGestor} />
                  
                  
                  <Input placeholder="Email :" type="email"  name="email" value={gestorData.email}  onChange={handleChangeGestor}  />
                  <LabelSignUp htmlFor="fotoG">Foto:{gestorData.foto?<span>selecionada</span>: <span> não selecionada</span>}</LabelSignUp>
                  <Input placeholder="password:" type="password" name="pasword" value={gestorData.pasword}  onChange={handleChangeGestor}/ >
                    
                   <Input type="file" id="fotoG" className="hidden"  title="Insira a sua foto"  accept="image/*" onChange={handleFileChangeGestor} />
                   
                    
                  
        
          </div>
          <div className="flex justify-center">
                       <ButtonG type="submit" color="bg-orange-300">Enviar</ButtonG>
              </div>
              
        </form>
        </>

        :<>

      <Title> Fazenda</Title>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="grid md:grid-cols-2 gap-4   ">
              <div className="grid gap-4 ">
                  <Input  placeholder="Nome: " type="text" name='nome' value={formData.nome} onChange={handleChange}/>
                  <Input placeholder="NIF:" type="text" name="nif" value={formData.nif} onChange={handleChange} />
                  
                
                   
                    
                   <Input type="file" id="foto" className="hidden"  title="Insira a sua foto"  accept="image/*" name="foto" onChange={handleFileChange} />
                   
                    <LabelSignUp htmlFor="foto">Foto:{formData.foto?<span>selecionada</span>: <span> não selecionada</span>}</LabelSignUp>
                    <Input placeholder="Contacto:" type="tel"  value={formData.telefone} onChange={handleChange} name='telefone' />
                    <Input placeholder="Iban:" type="text"  value={formData.iban} onChange={handleChange} name='iban' />
                   
                    
                  
      

                </div>
              <div className="grid gap-4 ">
              <Select  name="provincia" value={formData.provincia} onChange={handleChange}>
                              <option value="">Selecione a província: </option>
                              <option value="l">Bengo </option>
                        

                      </Select> 
                      <Select name="municipio" value={formData.municipio} onChange={handleChange}>
                        <option value="">Selecione o Município: </option>
                        <option value="l">Bengo </option>
                       

                      </Select>
                  
                
                      <Select name="comuna" value={formData.comuna} onChange={handleChange}>
                        <option value="">Selecione a comuna: </option>
                        <option value="l">Bengo </option>
                       

                      </Select>
                    
          
           
                
                     
        
                    
                    <Input placeholder="Bairro: " type="text"  name="bairro" value={formData.bairro} onChange={handleChange} />
                    <Input placeholder="Rua:" type="text" name="rua" value={formData.rua} onChange={handleChange} />
      

                </div>

                <Link href="/Login" className=" text-blue-400">Já tenho uma conta</Link>
              </div>
             
              <div className="flex justify-center">
                       <ButtonG type="submit" color="bg-orange-300">Enviar</ButtonG>
              </div>
             
            </form>
            </>
  }
           </Container>
    )

}