
import { Buttons } from "../button";
import { Input } from "../input";
import { Select } from "../select";
import { Title } from "../title";
import styles from './fazenda.module.css'
import Link from "next/link";
import { Container } from "../Container";
export default function Fazenda(){
    return(
      <Container className={styles.bunner} >
      
        <Title> Fazenda</Title>
            <form action=" " >
              <div className="grid md:grid-cols-2 gap-4   ">

              
                      <Input  placeholder="Nome: " type="text" name='nome' />

                      <Select >
                        <option value="">Selecione a província: </option>
                        <option value="BG">Bengo </option>
                        <option value="Bié">Bié </option>

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

           
           </Container>
    )

}