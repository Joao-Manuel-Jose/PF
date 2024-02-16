import { ProductData } from "@/app/(User)/User/(Fazenda)/[nome]/Modal/CadastroProduto/page";


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