"use client"
import { api, useAuth } from "@/app/(User)/user";
import { ButtonG } from "@/app/Components/Global/button";
import { ContainerForm } from "@/app/Components/Global/containerForm";
import { Select } from "@/app/Components/Global/select";
import { Textarea } from "@/app/Components/Global/textarea";
import { TitlePublic } from "@/app/Components/Global/titlep";
import { NavAlternative } from "@/app/Components/Header/User/navbar2/Alternative";
import { LucideClipboardEdit } from "lucide-react";
import { ProductData, produtoCategoria, produtoQualidade } from "../../Modal/CadastroProduto/page";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { UpdateProduto, cadastrarProduto } from "@/app/api/Fazenda/Produto/route";
import { Label } from "@/app/Components/Global/label";
import { Input } from "@/app/Components/SignUp/input";
import { LabelSignUp } from "@/app/Components/Global/labelSignUp";
import { BarLoader, HashLoader } from "react-spinners";
import Swal from "sweetalert2";


export default function UpdateProduct({params}:{
    params:{
        id:string
    }}){{
    const {user}=useAuth()
    
    const [status,setStatus]=useState<String | null>(null)
    const [product, setProduct]=useState<ProductData>({
        nome:'',
        id:0,
        data_caducidade:'',
        qualidade:0,
        quantidade:0,
        quantidadeS:0,
        preco:0,
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
              const response = await UpdateProduto(product,user.id);
            
              if(response){
  
              
               setTimeout(()=>setStatus('Sucesso ao actualizar'),1000)
               Swal.fire({
                title: 'Sucesso',
                text: 'Produto atualizado',
                confirmButtonColor: '#3085d6',
                icon: 'success',
               })
               
               
              }
              else{
                setTimeout(()=>setStatus('Erro ao actualizar'),1000)
                Swal.fire({
                  title: 'Erro',
                  text: 'Produto não  atualizado',
                  confirmButtonColor: '#3085d6',
                  icon: 'error',
                })

              }
             
             
        
              
              
           }
         
       
    
          
        } catch (error) {
          alert(error);
          setTimeout(()=>setStatus('Erro ao actualizar'),1000)
          console.error(error);
    
        }
      };
      useEffect(()=>{
        async function buscar() {
            try{
                if(user?.id){
                const endpoint=await fetch(`${api}/produto/${user.id}/${params.id}`,{
                    method:'GET'
                })
                const res=await endpoint.json()
                if(res){
                    setProduct({
                        id:res.produto.id,
                        nome:res.produto.nome,
                        descricao:res.produto.descricao,
                        qualidade:Number(res.produto.qualidade),
                        quantidade:Number(res.quantidade),
                        preco:Number(res.produto.preco),
                        quantidadeS:Number(res.produto.quantidadeS),
                        categoria:res.produto.categoria,
                        fto:res.produto.foto,
                        foto:null,
                        data_caducidade:res.produto.data_caducidade
                    
                    
                    
                })
                
                
            }}}
            catch(error){
                alert(error)

            }
            
        }
        buscar()
        
      },[params.id, user?.id])
    return(
        <>
       {
        user&&
        <>
        <section  className="bg-[url('/bg-update.JPG')] bg-cover bg-center min-h-[100vh]  ">
        <section className="bg-black bg-opacity-30 min-h-screen">    
            <NavAlternative hrf={`/User/${user.type}/`}/>
           
              
                
            <div className="flex items-center justify-center py-10 w-[100%]">
                <div className='  grid  md:grid-cols-12 gp-0 md:gap-8
                 rounded-2xl shadow-2xl px-4'>
                  <div className="hidden md:block col-span-3 mt-3 p-auto">
                    < p className="text-4xl font-bold text-white">AGROCLICK</p>
                      <h1 className="uppercase font-bold text-white">Atualização de Produto</h1>
                      <hr className="mx-auto bg-green-500  border"/>
                      <p className=" text-md text-center font-bold text-white">Atualize simplesmente dados necessários</p>
                      <p className="bg-gray-50 p-3 rounded-xl font-semibold">Insira uma nova foto caso deseja atualizar a antiga!!</p>
                  </div>
   
                  
                   <form onSubmit={handleSubmit} encType="multipart/form-data" className="ms-auto col-span-12 md:col-span-9 justify-center items-center  bg-gray-50 p-5
                    rounded-3xl">
                    {status  ?
                    <div className=" flex justify-center">
                      <BarLoader />
                    </div>:<span>{status}</span>
                   

                    }
                   <section className="grid md:grid-cols-2 justify-center items-center">  

      
                   <div className="grid  gap-1  ">
                            <div>
                                <Label>Nome do produto</Label>
                                <Input placeholder="Nome" type="text" name="nome" value={product.nome} onChange={handleChange} />
                            </div>
                            <div>
                            <Label>Mínima Quant. de saída de venda</Label>
                            <Input placeholder="Quantidade de saida" type="number" min={50} value={product.quantidadeS} onChange={handleChange} name="quantidadeS" />
                            </div>
                            <div>
                                <Label>Preço de uma Quant. de saída</Label>
                                <Input placeholder="Preço:" type="number" name="preco"  onChange={handleChange} value={product.preco} />
                            </div>
                            <div>
                                <Label>Nº de vezes da Quant. de saída em stock</Label>
                                <Input placeholder="Quantidade em stock" type="number" min={1} value={product.quantidade} onChange={handleChange} name="quantidade" />
                            </div>
                            <div>
                                <Label>Data limite de venda</Label>
                                <Input placeholder="Caducidade" type="date" onChange={handleChange} name="data_caducidade" value={product.data_caducidade}/>
                            </div>

         
         
                    </div>
                    <div className="grid  gap-2   ">
                      <div>
                       <Label>Atualizar a foto</Label>
                        <LabelSignUp htmlFor="foto">Foto:{product.foto?<span >selecionada</span>: <span > não selecionada</span>}</LabelSignUp>
                      <input type="file" id="foto" className="hidden"   title="Insira a sua foto" name="foto"  accept="image/*" onChange={handleFileChange} required={false} />
                      </div>
                      <div>
                          <Label>Qualidade</Label>
                      <Select value={product.qualidade} onChange={handleChange} name="qualidade">
                        <option value="">Selecione a qualidade</option>
                        {
                          produtoQualidade.map((p,index)=>(
                            <option value={p.value} key={index}>{p.tittle}</option>
                          )

                          )
                        }
                      </Select>
                      </div>
                      
                      <div>
                      <Label>Categoria</Label>
                      <Select name="categoria" value={product.categoria}  onChange={handleChange}  >
                        <option value="">Selecione a categoria</option>
                        {
                          produtoCategoria.map((p,index)=>(
                            <option value={p.title} key={index} className="hover:bg-orange-300 hover:text-white">{p.title}</option>
                          )

                          )
                        }
                      </Select>

                      </div>
                      <div>
                          <Label>Descrição do produto</Label>
                          <Textarea placeholder="Descrição:" required value={product.descricao} name="descricao" onChange={handleChange} />
                      </div>
                      <div>
                          <Label>Descrição do produto</Label>
                          <Textarea placeholder="Descrição:" required value={product.descricao} name="descricao" onChange={handleChange} disabled/>
                      </div>
           
           
          
                 </div>
                 </section> 
       
        
         <div className="flex justify-center">
         <ButtonG color="bg-orange-300" type="submit">Inserir</ButtonG>
         </div>
         </form>
        
                
                    
                </div>
            </div>         
             
     
            </section>
      </section>
        </>


       }

        </>
    )
}}