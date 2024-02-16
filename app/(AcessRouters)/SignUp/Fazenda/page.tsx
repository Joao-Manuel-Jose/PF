"use client"
import { Buttons } from "../../../Components/SignUp/AcessRouter/button";
import styles from './fazenda.module.css';
import Link from "next/link";
import { Container } from "../../../Components/SignUp/AcessRouter/Container";
import { Input } from "@/app/Components/SignUp/input";
import { Select } from "@/app/Components/Global/select";
import { Title } from "@/app/Components/SignUp/title";
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';


import { ButtonG } from "@/app/Components/Global/button";

import { useAuth } from "@/app/(User)/user";
import { redirect } from "next/navigation";
import { LabelSignUp } from "@/app/Components/Global/labelSignUp";
import { cadastrarFazenda, cadastrarGestor } from "@/app/api/Cadastro/route";


 export interface Fazenda {
  token:string
  id: number;
  nif: string;
 
  telefone: string;
  nome: string;
  provincia: string;
  email:string
  municipio: string;
  comuna: string;
  bairro: string;
  foto:string;
  rua: string;
  // Adicione outros campos conforme necessário
}
export interface FormData {
  id?:number
  nif: string;
  token:string
  transporte: boolean,
  telefone:string,
  nome: string;
  provincia: string;
  municipio: string;
  comuna:string,
  email:string
  bairro: string;
  rua: string;
  pasword?:string
  fto:string;
  foto: File | null;
  nomeGestor?:string
  fotoGestor?:string
}
export interface GestorData{
  nome:string,
  fto?:string
  foto: File | null,
  pasword:string
}
export default function Fazenda() {
  const [userAuthenticate, setUserAuthenticate]=useState('')
   const {  login } = useAuth();
  const [provincias, setProvincias] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [comuna, setComuna] = useState<string[]>([])
   const[sucessFazenda, setSucessFazenda]=useState<boolean>(false)
  
   const[gestorData,setGestorData]=useState<GestorData>({
    nome:'',
  
    pasword:'',
    foto:null
   })
  const [formData, setFormData] = useState<FormData>({
    token:'',
    fto:'',
    nif: '',
    email: '',
    transporte: false,
    nome: '',
    provincia: '',
    municipio: '',
    comuna:'',
    telefone:'',
    bairro: '',
    rua: '',
    nomeGestor:'',
    fotoGestor:'',
    foto: null,
  });
  if(userAuthenticate){
    redirect(`../../User/${userAuthenticate}`)
  }
 
  //selects
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
  //municipio
  useEffect(() => {
   
    setTimeout(()=>{
      if (formData.provincia) {
        fetch(`http://localhost:5000/${formData.provincia}/municipio`)
          .then(response => response.json())
          .then(data => setMunicipios(data))
          .catch(error => console.error('Erro ao obter a lista de municípios:', error));
      } else {
        setMunicipios([]); // Se nenhuma província for selecionada, resete a lista de municípios
      }

    },200)

  }, [formData.provincia]);
  useEffect(() => {
   
    setTimeout(()=>{
      if (formData.provincia && formData.municipio) {
        fetch(`http://localhost:5000/${formData.provincia}/${formData.municipio}`)
          .then(response => response.json())
          .then(data => setComuna([...data]))
          .catch(error => console.error('Erro ao obter a lista de municípios:', error));
      } else {
        setComuna([]); // Se nenhuma província for selecionada, resete a lista de municípios
      }

    },200)

  },  [formData.municipio,formData.provincia]);

  //End
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
      const {token,my} = await cadastrarFazenda(formData);
      const myRes:Fazenda=my
    
      if(token&&my){
        setFormData(prev=>({
          ...prev,
          id:myRes.id,
          fto:myRes.foto,
          token:token

        }))
       
        setSucessFazenda(true)
      
     

      }
   

      
    } catch (error) {
      alert(error);
      console.error(error);

    }
  };

  //gestor
  function handleChangeGestor(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
    const { name, value, type } = e.target;

    setGestorData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  function handleFileChangeGestor(e: ChangeEvent<HTMLInputElement>){
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGestorData((prevData) => ({
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
      if(formData.id){
        const response = await cadastrarGestor(gestorData,formData.id);
        const myRes:{nome:string, foto:string}=response
        if(response)
        {
          console.log(response)
         setFormData(prev=>({
            ...prev,
          nomeGestor:myRes.nome,
          fotoGestor:myRes.foto,
            
  
          }))
          alert(formData.nomeGestor)
        
          
          if(formData.token){
            await login(formData.token, formData);
            setUserAuthenticate(formData.nome)
          

          }
         
       
          
       
       
  
        }
      }
     
   

      
    } catch (error) {
      alert(error);
      console.error(error);

    }
  };

  return (
    
      <Container className={styles.bunner} >
        {sucessFazenda?
        <>
        <p className="text-orange-400 bg.white rounded-md p-3  border-sky-500">Passo-2!</p>
        
        <Title> Cadastre o Gestor</Title>
        
        <form onSubmit={handleSubmitGestor} encType="multipart/form-data">
        <div className="grid  gap-5 px-4 py-4  ">
             
                  <Input  placeholder="Nome: " type="text" name='nome' value={gestorData.nome} onChange={handleChangeGestor} />
                  
                  
                  
                  <LabelSignUp htmlFor="fotog">Foto:{gestorData.foto?<span>selecionada</span>: <span> não selecionada</span>}</LabelSignUp>
                  <Input placeholder="password:" type="password"  name="pasword" value={gestorData.pasword}  onChange={handleChangeGestor}/ >
                    
                   <Input type="file" id="fotog" className="hidden"   title="Insira a sua foto" name="foto"  accept="image/*" onChange={handleFileChangeGestor} />
                   
                    
                  
        
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
                   
                    <LabelSignUp htmlFor="foto">Foto:{formData.foto?<span >selecionada</span>: <span > não selecionada</span>}</LabelSignUp>
                    <Input placeholder="Contacto:" type="tel"  value={formData.telefone} onChange={handleChange} name='telefone'  pattern="[0-9]{9}" title="O número deve conter 9digitos"  />
                    <Input placeholder="Email:" type="email"  value={formData.email} onChange={handleChange} name='email' />
                   
                    
                  
      

                </div>
              <div className="grid gap-4 ">
              <Select  name="provincia" value={formData.provincia} onChange={handleChange}>
                              <option value="">Selecione a província: </option>
                              {provincias.map((provincia) => (
                               <option key={provincia} value={provincia}>
                                              {provincia}
                                </option>
                                  ))}
                        

                      </Select> 
                      <Select name="municipio" value={formData.municipio} onChange={handleChange} disabled={!formData.provincia}>
                        <option value="">Selecione o Município: </option>
                        {municipios.map((municipio) => (
                          <option key={municipio} value={municipio}>
                            {municipio}
                          </option>
                           ))
                        }
                       

                      </Select>
                  
                
                      <Select name="comuna" value={formData.comuna} onChange={handleChange} disabled={!formData.provincia || !formData.municipio}>
                        <option value="">Selecione a comuna: </option>
                        {comuna.map((comuna) => (
                          <option key={comuna} value={comuna}>
                            {comuna}
                          </option>
                               ))
                        }
                       

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