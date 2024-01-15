"use client"
import { Buttons } from "../button";
import styles from './fazenda.module.css';
import Link from "next/link";
import { Container } from "../Container";
import { Input } from "@/app/(RotasPublicas)/Sign_up/input";
import { Select } from "@/app/(RotasPublicas)/Sign_up/select";
import { Title } from "@/app/(RotasPublicas)/Sign_up/title";
import { useState, ChangeEvent, FormEvent } from 'react';
import { cadastrarFazenda } from "@/app/api/Cadastro/route";

interface FormData {
  nif: string;
  iban: string;
  transporte: boolean,
  telefone:string,
  nome: string;
  provincia: string;
  municipio: string;
  comuna:string,
  distrito: string;
  bairro: string;
  rua: string;
  foto: File | null;
}

export default function Fazenda() {
  const [formData, setFormData] = useState<FormData>({
    nif: '',
    iban: '',
    transporte: false,
    nome: '',
    provincia: '',
    municipio: '',
    comuna:'',
    distrito: '',
    telefone:'',
    bairro: '',
    rua: '',
    foto: null,
  });

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

      // Trate a resposta conforme necessário
      console.log(response);

      // Redirecione ou faça outras ações após o sucesso do cadastro
    } catch (error) {
      alert(error);
      console.error(error);
      // Trate os erros conforme necessário
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
      
        <Title> Fazenda</Title>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="grid md:grid-cols-2 gap-4   ">
              <div className="grid gap-4 ">
                  <Input  placeholder="Nome: " type="text" name='nome' value={formData.nome} onChange={handleChange}/>
                  <Input placeholder="NIF:" type="text" name="nif" value={formData.nif} onChange={handleChange} />
                  
                
                   <Input placeholder="Email:"value={formData.nome} onChange={handleChange} type="email" name="email"/>
                    
          
                    <Input type="file" title="Insira a sua foto"  accept="image/*" name="foto" onChange={handleFileChange} />
                
                    <Input placeholder="Iban:" type="text"  value={formData.iban} onChange={handleChange} name='iban' />
                    <Input placeholder="Telefone: " type="tel" value={formData.telefone}  name="telefone"/>
                    
                  
      

                </div>
              <div className="grid gap-4 ">
              <Select  name="prov" value={formData.provincia} onChange={handleChange}>
                              <option value="">Selecione a província: </option>
                              <option value="l">Bengo </option>
                        

                      </Select> 
                      <Select name="muni" value={formData.municipio} onChange={handleChange}>
                        <option value="">Selecione o Município: </option>
                        <option value="l">Bengo </option>
                       

                      </Select>
                  
                
                      <Select name="comuna" value={formData.comuna} onChange={handleChange}>
                        <option value="">Selecione a comuna: </option>
                        <option value="l">Bengo </option>
                       

                      </Select>
                    
          
                      <Select name="disttrito" value={formData.distrito} onChange={handleChange}>
                        <option value="">Selecione o Distrito: </option>
                        <option value="l">Bengo </option>
                       

                      </Select>
                
                     
        
                    
                    <Input placeholder="Bairro: " type="text"  name="bairro" value={formData.bairro} onChange={handleChange} />
                    <Input placeholder="Rua:" type="text" name="rua" value={formData.rua} onChange={handleChange} />
      

                </div>
        
               {/* <div className="grid gap-2">
                      <Select  name="prov" value={formData.prov} onChange={handleChange}>
                              <option value="">Selecione a província: </option>
                              <option value="l">Bengo </option>
                        

                      </Select> 
                      <Input placeholder="Rua:" type="text" name="rua" value={formData.rua} onChange={handleChange} />
                    <Input placeholder="iban:" type="number"  name="iban" value={formData.iban} onChange={handleChange}/>
                    <Input placeholder="Palavra-passe" type="password"/>
                      
                     

                      <Select name="muni" value={formData.muni} onChange={handleChange}>
                        <option value="">Selecione o Município: </option>
                        <option value="l">Bengo </option>
                       

                      </Select>
                     
                    
                
                 
                   


                </div>*/}



                
               
              
                     

                      
                <Link href="/Login" className=" text-blue-400">Já tenho uma conta</Link>
              </div>
             
              <div className="flex justify-center">
                       <Buttons type="submit">Enviar</Buttons>
              </div>
             
            </form>

           
           </Container>
    )

}