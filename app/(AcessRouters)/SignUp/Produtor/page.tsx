
import { Buttons } from "../button";
import { Input } from "@/app/(RotasPublicas)/Sign_up/input";
import { Select } from "@/app/(RotasPublicas)/Sign_up/select";
import { Title } from "@/app/(RotasPublicas)/Sign_up/title"; 
import styles from './produtor.module.css'
import Link from "next/link";
import { Container } from "../Container";
export default function Produtor(){
    return(
      <Container className={styles.bunner} >
      
        <Title>Produtor</Title>
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
                    <Input placeholder="Palavra-passe" type="password"/>
                  

              </div>
              <Link href="/Login" className="mt-2 text-blue-400">Já tenho uma conta</Link>
              <div className="flex justify-center">
                       <Buttons type="submit">Enviar</Buttons>
              </div>
             
            </form>

           
           </Container>
    )

}