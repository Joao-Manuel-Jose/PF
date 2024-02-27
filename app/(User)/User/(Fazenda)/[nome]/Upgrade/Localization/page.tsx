'use client'

import { User, useAuth } from "@/app/(User)/user";
import { ButtonG } from "@/app/Components/Global/button";
import { Label } from "@/app/Components/Global/label";
import { Select } from "@/app/Components/Global/select";
import { InputPf } from "@/app/Components/User/Modal/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
const showAlert = () => {
    Swal.fire({
      title: 'sucesso',
      text: 'Localização atualizada',
      icon: 'success', // ou 'success', 'warning', 'error', 'question'
    });
  }
  const showAlertError = () => {
    Swal.fire({
      title: 'Erro',
      text: 'Localizaçã não  atualizada',
      confirmButtonColor: '#3085d6',
      icon: 'error', // ou 'success', 'warning', 'error', 'question'
    });
  }
export default function Dados(){
    const [provincias, setProvincias] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [comuna, setComuna] = useState<string[]>([])
    const [userUpadte, setUserUpdate] = useState<User>({
       fto:'',
       nif: '',
       descricao:'',
       whatsapp:0,
       transporte:false,
       distrito:'',
       telefone:'',
       nome: '',
       provincia: '',
       municipio: '',
       comuna:'',
       email:'',
       iban:'',
       bairro: '',
       rua: '',
       foto:null
    });
     const {user,updateUser,foto}=useAuth()
     function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value, type } = e.target;
          setUserUpdate(prev=>({
            ...prev,
            [name]: type === 'number' ? Number(value) : value,
            [name]: type === 'boolean' ? Boolean(value) : value,
    
          }))
    
        }
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
              if (userUpadte?.provincia) {
                fetch(`http://localhost:5000/${userUpadte.provincia}/municipio`)
                  .then(response => response.json())
                  .then(data => setMunicipios(data))
                  .catch(error => console.error('Erro ao obter a lista de municípios:', error));
              } else {
                setMunicipios([]); // Se nenhuma província for selecionada, resete a lista de municípios
              }
        
            },200)
        
          }, [userUpadte?.provincia]);
          useEffect(() => {
           
            setTimeout(()=>{
              if (userUpadte?.provincia && userUpadte?.municipio) {
                fetch(`http://localhost:5000/${userUpadte?.provincia}/${userUpadte?.municipio}`)
                  .then(response => response.json())
                  .then(data => setComuna([...data]))
                  .catch(error => console.error('Erro ao obter a lista de municípios:', error));
              } else {
                setComuna([]); // Se nenhuma província for selecionada, resete a lista de municípios
              }
        
            },200)
        
          },  [userUpadte?.municipio,userUpadte?.provincia]);
        
          //End
        //Fazenda
        useEffect(()=>{
          setUserUpdate(prev=>({
            ...prev,...user
      
          }))
        },[user])  
        const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if(user?.id){
            const response=await updateUser(userUpadte)
            if(response)
             setTimeout(showAlert,300)
            else 
            setTimeout(showAlertError,300)
      
          }
           
        }
        if(user){
    return(
        <>
        <p>Localização</p>
        <div className="mt-4 p-3 bg-gray-50 rounded-xl">
        
        <form  onSubmit={handleSubmit} className="mt-3 grid gap-4 justify-center md:justify-start">
         <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
         <div>
          <Label>Província:</Label>
              <Select  name="provincia" value={userUpadte.provincia} onChange={handleChange}>
                                  <option value="">Selecione a província: </option>
                                  {provincias.map((provincia) => (
                                  <option key={provincia} value={provincia}>
                                                  {provincia}
                                    </option>
                                      ))}
                            

                </Select> 
          </div>
          <div>
         
          <Label>Município:</Label>
         
             <Select name="municipio" value={userUpadte.municipio} onChange={handleChange} disabled={!user.provincia}>
                        <option value="">Selecione o Município: </option>
                        {municipios.map((municipio) => (
                          <option key={municipio} value={municipio}>
                            {municipio}
                          </option>
                           ))
                        }
                       

              </Select>
                  
          </div>                      
     
          <div>
          <Label>Comuna:</Label>
          <Select name="comuna" value={userUpadte.comuna} onChange={handleChange} disabled={!user.provincia || !user.municipio}>
                        <option value="">Selecione a comuna: </option>
                        {comuna.map((comuna) => (
                          <option key={comuna} value={comuna}>
                            {comuna}
                          </option>
                               ))
                        }
                       

          </Select>

          </div>
          <div>
          {<Label>Distrito:</Label>}
          <InputPf placeholder="Distrito: " type="text"  name="distrito" value={userUpadte.distrito} onChange={handleChange} />
          </div> 
          <div>
            <Label>Bairro</Label>
          <InputPf placeholder="Bairro: " type="text"  name="bairro" value={userUpadte.bairro} onChange={handleChange} />
                   
          </div>
          <div>
          <Label>Rua</Label>
          <InputPf placeholder="Rua:" type="text" name="rua" value={userUpadte.rua} onChange={handleChange} />
          </div>
             
           
            
         </div>
             <div className="flex justify-center">
             <ButtonG color="bg-orange-300 mt-2" type="submit"
             disabled={userUpadte.provincia===user.provincia&&userUpadte.municipio===user.municipio&&
               userUpadte.comuna===user.comuna&&userUpadte.distrito===user.distrito&&
               userUpadte.bairro===user.bairro&&userUpadte.rua===user.rua
             }
             >Actualizar
             </ButtonG>
         </div>
         </form>
        </div>
        </>
    )
            }
}