"use client"
import { Buttons } from "../../../Components/SignUp/AcessRouter/button";
import { useState, useEffect } from 'react';
import { Select } from "@/app/Components/Global/select";
import { Title } from "@/app/Components/SignUp/title";
import Link from "next/link";
import { Container } from "../../../Components/SignUp/AcessRouter/Container";
import { Background } from "./Background";
import { Input } from "@/app/Components/SignUp/input";
export default function Transportadora(){
  interface Province {
    id: string;
    name: string;
  }
  const [provincias, setProvincias] = useState([]);
 
  const [municipios, setMunicipios] = useState([]);
  const [comuna, setComuna] = useState<string[]>([])
  const [selectedProvincia, setSelectedProvincia] = useState('');
  const [selectedComuna, setselectedComuna] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  useEffect(() => {
    // Faz a requisição para o servidor para obter a lista de províncias
    // Substitua isso por uma chamada real à API do seu servidor
    setTimeout(()=>{
      fetch('http://localhost:5000/provinces')
      .then(response => response.json())
      .then(data => setProvincias(data))
      .catch(error => console.error('Erro ao obter a lista de províncias:', error));

    },1000)
    
  }, []);
  useEffect(() => {
   
    setTimeout(()=>{
      if (selectedProvincia) {
        fetch(`http://localhost:5000/${selectedProvincia}/municipio`)
          .then(response => response.json())
          .then(data => setMunicipios(data))
          .catch(error => console.error('Erro ao obter a lista de municípios:', error));
      } else {
        setMunicipios([]); // Se nenhuma província for selecionada, resete a lista de municípios
      }

    },200)

  }, [selectedProvincia]);
  useEffect(() => {
    setTimeout(()=>{
    if (selectedProvincia&&selectedMunicipio) {
      fetch(`http://localhost:5000/${selectedProvincia}/${selectedMunicipio}`)
        .then(response => response.json())
        .then(data => setComuna([...data]))
        .catch(error => console.error('Erro ao obter a lista de municípios:', error));
    } else {
      setComuna([]); // Se nenhuma província for selecionada, resete a lista de municípios
    }

  },200)
  
  }, [selectedMunicipio, selectedProvincia]);
  
  



   
  
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
                      <Select 
        value={selectedComuna}
        onChange={(e) => setselectedComuna(e.target.value)}
        disabled={!selectedProvincia || !selectedMunicipio} >
                        <option value="null">Selecione a comuna: </option>
                        {comuna.map((comuna) => (
          <option key={comuna} value={comuna} >
            {comuna}
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