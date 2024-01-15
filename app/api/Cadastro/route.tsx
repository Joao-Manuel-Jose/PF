

interface FormData {
    nif: string;
    iban: number;
    transporte: boolean;
    nome: string;
    prov: string;
    muni: string;
    distri: string;
    bairro: string;
    rua: string;
    foto: File | null,

  }
  
  const apiUrl = 'http://localhost:4000/cadastro'; // Substitua pelo seu endpoint real
  
  export const cadastrarFazenda = async (formData: FormData): Promise<any> => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`Erro ao cadastrar fazenda: ${response.json()}`);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      throw error;
    }
  };