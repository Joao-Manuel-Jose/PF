"use client"
import { modalP } from "@/app/(User)/User/NUser/[params]/modal/Fazenda/page";
import { useAuth } from "@/app/(User)/user";
import { ButtonG } from "@/app/Components/Global/button";
import { ContainerForm } from "@/app/Components/Global/containerForm";
import { LabelSignUp } from "@/app/Components/Global/labelSignUp";
import { Select } from "@/app/Components/Global/select";
import { Textarea } from "@/app/Components/Global/textarea";
import { Input } from "@/app/Components/SignUp/input";
import { Modal } from "@/app/Components/User/Modal/page";
import { cadastrarProduto } from "@/app/api/Fazenda/Produto/route";
import { ChangeEvent, FormEvent, useState } from "react";
export interface ProductData{
   id?:number

   nome: string;
   descricao: string;
   qualidade:number,
   quantidade:number | undefined,
   quantidadeS:number | undefined
   categoria: string;
   preco:number | undefined;
   fto:string;
   foto: File | null;
 
 }
const produtoQualidade=[
   {tittle:'Boa',value:8},
   {tittle:'Razoável', value:5},
   { tittle:'Excelente', value:10},
]
const produtoCategoria=[
   {tittle:'Fruta',value:8},
   {tittle:'Legume', value:5},
   { tittle:'Vegetal', value:10},
]

export  default function ModalCadProduto({ isOpen,onClose}:modalP){
   const {user}=useAuth()
   const [status,setStatus]=useState<String | null>(null)
   const [product, setProduct]=useState<ProductData>({
      nome:'',
      qualidade:0,
      quantidade:undefined,
      quantidadeS:undefined,
      preco:undefined,
      descricao:'',
      categoria:'',
      fto:'',
      foto:null

   })
   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
  
      setProduct((prevData) => ({
        ...prevData,
        [name]: type === 'number' ? Number(value) : value,
      }));
    };
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProduct((prevData) => ({
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
         if(user?.id){
            const response = await cadastrarProduto(product,user?.id);
          
            if(response){

             await  setProduct(prev=>({
               ...prev,
                  nome:'',
                  qualidade:0,
                  quantidade:0,
                  quantidadeS:0,
                  preco:0,
                  descricao:'',
                  categoria:'',
                  fto:'',
                  foto:null
                  
               }))
             setStatus('Sucesso ao Cadastrar')
            }
            else
            setStatus('Erro ao cadastrar')
           
      
            
            
         }
       
     
  
        
      } catch (error) {
        alert(error);
        console.error(error);
  
      }
    };

  
  return(
 <Modal isOpen={isOpen} onClose={onClose} title="Inserir Produtos" bgImg="bg-[url('/background/b-1.jpg')]">
   <ContainerForm className="bg-url('/background/home.jpg')">
      {
         status && <p className="text-md text-orange-300">{status}</p>
      }
      <form onSubmit={handleSubmit} >
      <div className="grid md:grid-cols-2 gap-1   ">
      <div className="grid  gap-3 px-4 py-4  ">
         <Input placeholder="Nome" type="text" name="nome" value={product.nome} onChange={handleChange} />
         <Input placeholder="Preço:" type="number" name="preco" value={product.preco} onChange={handleChange} />
         <Input placeholder="Quantidade de saida" type="number" min={50} value={product.quantidadeS} onChange={handleChange} name="quantidadeS" />
         <Input placeholder="Quantidade em stock" type="number" min={50} value={product.quantidade} onChange={handleChange} name="quantidade" />
      </div>
         <div className="grid  gap-5 px-4 py-4  ">
            <Select value={product.qualidade} onChange={handleChange} name="qualidade">
               <option value="">Selecione a qualidade</option>
               {
                produtoQualidade.map((p,index)=>(
                  <option value={p.value} key={index}>{p.tittle}</option>
                )

                )
               }
            </Select>
            <Select name="categoria" value={product.categoria}  onChange={handleChange}  >
               <option value="">Selecione a categoria</option>
               {
                produtoCategoria.map((p,index)=>(
                  <option value={p.tittle} key={index} className="hover:bg-orange-300 hover:text-white">{p.tittle}</option>
                )

                )
               }
            </Select>
            <LabelSignUp htmlFor="foto">Foto:{product.foto?<span >selecionada</span>: <span > não selecionada</span>}</LabelSignUp>
            <Input type="file" id="foto" className="hidden"   title="Insira a sua foto" name="foto"  accept="image/*" onChange={handleFileChange}  />
           <Textarea placeholder="Descrição:" required value={product.descricao} name="descricao" onChange={handleChange} />
         </div>
       
         </div>
         <div className="flex justify-center">
         <ButtonG color="bg-orange-300" type="submit">Inserir</ButtonG>
         </div>
         </form>
   </ContainerForm>
   </Modal>
   )
}