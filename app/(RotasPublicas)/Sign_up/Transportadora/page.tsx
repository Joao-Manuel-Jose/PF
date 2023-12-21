"use client"
import { Buttons } from "../button";
import { useState, useEffect } from 'react';
import { getProvinces } from "../busca";
import { Input } from "../input";
import { Select } from "../select";
import { Title } from "../title";

import Link from "next/link";
import { Container } from "../Container";
import { Background } from "./Background";
export default function Transportadora(){
  interface Province {
    id: string;
    name: string;
  }
  const [provinces, setProvinces] = useState<Province[]>([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      const provincesData = await getProvinces();
      setProvinces(provincesData);
    };

    fetchProvinces();
  }, []);
  
    return(
     <Background>
      
        <Title>Transportadora</Title>
            <form action=" " >
              <div className="grid md:grid-cols-2 gap-4   ">

              
                      <Input  placeholder="Nome: " type="text" name='nome' />

                      <Select >
                        <option value="">Selecione a província: </option>
                        {provinces.map((province) => (
                  <option key={province.id} value={province.name}>
                      {province.name}
                         </option>
                         ))}

                      </Select> 
                      
                      <Input placeholder="NIF:" type="text" name='nif' />

                      <Select disabled>
                        <option value="">Selecione o Município: </option>
                        <option value="BG">Bengo </option>
                        <option value="Bié">Bié </option>

                      </Select>
                      <Input placeholder="Telefone: " type="tel" />
                    
                
                    <Input placeholder="Email:" type="email"/>
                    
          
                      <Input type="file" accept="image/*"/>
                  
                      <Input placeholder="descricao:" type="text" name='descricao' />
        
                      <Input placeholder="Distrito: " type="text" />
                    
                
                    <Input placeholder="Rua:" type="text"/>
                    <Link href="/Login" className=" text-blue-400">Já tenho uma conta</Link>

              </div>
              <div className="flex justify-center">
                       <Buttons type="submit">Enviar</Buttons>
              </div>
             
            </form>
            </Background>
           
           
    )

}