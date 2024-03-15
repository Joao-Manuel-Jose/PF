import { ProductData } from "@/app/(User)/User/(Fazenda)/[nome]/Modal/CadastroProduto/page";
import { api } from "@/app/(User)/user";


export async function cadastrarProduto(ProductData:ProductData,id:number) {
    const endpoint = `http://localhost:4000/cadastro/fazenda/produto/${id}`;
    const formDataToSend = new FormData();
    try{
    Object.entries(ProductData).forEach(([key, value]) => {
      if (key === 'foto' && value) {
        formDataToSend.append(key, value as File, (value as File).name);
      } else {
        formDataToSend.append(key, value.toString());
      }
    });
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formDataToSend,
    });
    if (!response.ok) {
      throw new Error('Erro ao cadastrar Produto');
    }
    console.log(response.json)
    return response.json();
}
    catch(error){
      alert(error)
    }
  }
  export async function DeleteProduto(fazendaId:number,id:number){
    try{
      const endpoint= await fetch(`${api}/fazenda/produtoDelete/${fazendaId}/${id}`,{
        method:'DELETE'
      }
      )
      const response=await endpoint.json()
      if(response)
      return response
      else
      return null


    }
    catch(error){
      return null

    }
    

  }
  export  async function UpdateProduto(produto:ProductData,id:number) {
    const formDataToSend = new FormData();
    try {
      Object.entries(produto).forEach(([key, value]) => {
        if (key === 'foto' && value) {
          formDataToSend.append(key, value as File, (value as File).name);
        } 
        else if(value) {
          formDataToSend.append(key,value.toString());
        }
      });
        const response = await fetch(`${api}/fazenda/produtoUpdate/${produto.id}/${id}`, {
          method: 'PATCH',
        
          body: formDataToSend,
        });
    
        
        if(!response.ok){
            const errorData=await response.text()
            console.log(errorData)
            throw new Error(`Erro no Servidor:${errorData}`)
        }
        const my=await response.json()
       
        console.log(my)
        return ( my)
  
      }catch(error){
        console.log(error)
        return null
      }
    }