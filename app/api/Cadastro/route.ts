import { api, client } from "@/app/(User)/user";


 interface FormData {
  nif: string;
  email: string;
  transporte: boolean,
  telefone:string,
  nome: string;
  provincia: string;
  municipio: string;
  comuna:string,
  bairro: string;
  rua: string;
  foto: File | null;
}
 interface GestorData{
  nome:string,
 
  foto: File | null,
  pasword:string
}
  
export async function cadastrarGestor(GestorData:GestorData,id:number) {
  const endpoint = `http://localhost:4000/cadastro/fazenda/gestor/${id}`;
  const formDataToSend = new FormData();
  try{
  Object.entries(GestorData).forEach(([key, value]) => {
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
    throw new Error('Erro ao cadastrar gestor');
  }
  console.log(response.json)
  return response.json();}
  catch(error){
    alert(error)
  }
}
  
export async function cadastrarFazenda(formData: FormData)  {
  const endpoint = 'http://localhost:4000/cadastro/fazenda';

  const formDataToSend = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
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
    throw new Error('NIF ou email invalido');
  }
  console.log(response.json)
  const {token, my}=await response.json()
  return ({token, my})

};
export async function cadastrarClient(formData: client)  {
  const endpoint = `${api}/cadastro/client`;

  const formDataToSend = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
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
    const errorData=await response.text()
    throw new Error(`Erro no Servidor:${errorData}`)
  }
 
  const {token, my}=await response.json()
  
  return ({token, my})

};