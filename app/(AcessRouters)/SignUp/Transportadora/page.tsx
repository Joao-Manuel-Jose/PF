"use client"
import { Buttons } from "../button";
import { useState, useEffect } from 'react';
import { Select } from "@/app/(RotasPublicas)/Sign_up/select";
import { Title } from "@/app/(RotasPublicas)/Sign_up/title";
import Link from "next/link";
import { Container } from "../Container";
import { Background } from "./Background";
import { Input } from "@/app/(RotasPublicas)/Sign_up/input";
export default function Transportadora(){
  interface Province {
    id: string;
    name: string;
  }
  const [provincias, setProvincias] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  useEffect(() => {
    // Faz a requisição para o servidor para obter a lista de províncias
    // Substitua isso por uma chamada real à API do seu servidor
    setTimeout(()=>{
      fetch('http://localhost:4000/provinces')
      .then(response => response.json())
      .then(data => setProvincias(data))
      .catch(error => console.error('Erro ao obter a lista de províncias:', error));

    },1000)
    
  }, []);
  useEffect(() => {
    // Faz a requisição para o servidor para obter os municípios da província selecionada
    // Substitua isso por uma chamada real à API do seu servidor
    setTimeout(()=>{
      if (selectedProvincia) {
        fetch(`http://localhost:4000/${selectedProvincia}/municipio`)
          .then(response => response.json())
          .then(data => setMunicipios(data))
          .catch(error => console.error('Erro ao obter a lista de municípios:', error));
      } else {
        setMunicipios([]); // Se nenhuma província for selecionada, resete a lista de municípios
      }

    },200)

  }, [selectedProvincia]);



   
  
    return(
     <Background>
      
        <Title>Transportadora</Title>
            <form action=" " >
              <div className="grid md:grid-cols-2 gap-4   ">

              
                      <Input  placeholder="Nome: " type="text" name='nome' />

                      <Select  id="provincia"
        value={selectedProvincia}
        onChange={(e) => setSelectedProvincia(e.target.value)}>
                        <option value="">Selecione a província: </option>
                        {provincias.map((provincia) => (
                     <option key={provincia} value={provincia}>
                    {provincia}
          </option>
        ))}

                      </Select> 
                      
                      <Input placeholder="NIF:" type="text" name='nif' />

                      <Select 
        value={selectedMunicipio}
        onChange={(e) => setSelectedMunicipio(e.target.value)}
        disabled={!selectedProvincia} >
                        <option value="">Selecione o Município: </option>
                        {municipios.map((municipio) => (
          <option key={municipio} value={municipio}>
            {municipio}
            </option>
             ))}
                        

                      </Select>
                      <Input placeholder="Telefone: " type="tel" />
                    
                
                    <Input placeholder="Email:" type="email"/>
                    
          
                      <Input type="file" accept="image/*"/>
                  
                      <Input placeholder="descricao:" type="text" name='descricao' />
        
                      <Input placeholder="Distrito: " type="text" />
                    
                
                    <Input placeholder="Rua:" type="text"/>
                    <Input placeholder="Palavra-passe" type="password"/>
                   

              </div>
              <Link href="/Login" className=" text-blue-400">Já tenho uma conta</Link>
              <div className="flex justify-center">
                       <Buttons type="submit">Enviar</Buttons>
              </div>
             
            </form>
            </Background>
           
           
    )

}