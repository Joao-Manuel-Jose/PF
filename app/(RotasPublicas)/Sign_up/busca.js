
const API_URL = 'https://angolaapi.herokuapp.com/api/v1/geography/provinces';



export const getProvinces = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`Erro ao obter províncias: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
