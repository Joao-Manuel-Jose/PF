
import { Buttons } from "../button";
import { Input } from "../input";
import { Select } from "../select";
import { Title } from "../title";
import styles from '../sign.module.css'
export default function Fazenda(){
    return(
         <div className={styles.bunner}>
          <div className="flex items-center justify-center py-10">
          <div className="bg-gray-50    md:w-[70%] grid items-center p-10  md:px-5 px-2 mt-20 mx-2 md:mx-14 
           rounded-2xl shadow-xl ">
      
        <Title> Fazenda</Title>
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
                      <Select >
                        <option value="">Selecione o Município: </option>
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
        </div>
    )

}