

 interface FormData {
  nif: string;
  iban: string;
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
  email:string,
  foto: File | null,
  pasword:string
}
  
export async function cadastrarGestor(GestorData:GestorData) {
  const endpoint = 'http://localhost:4000/cadastro/gestor';
  
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
    throw new Error('Erro ao cadastrar fazenda');
  }

  return response.json();
};