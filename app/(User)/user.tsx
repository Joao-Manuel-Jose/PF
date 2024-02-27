"use client"
import { createContext, useContext, ReactNode, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { GestorData } from '../(AcessRouters)/SignUp/Fazenda/page';
import UpdateFAzenda from '../api/Fazenda/route';
import { redirect } from 'next/navigation';
import { json } from 'stream/consumers';

export interface User {
  type?:string
  id?:number
  nif: string;
  descricao?:string
  whatsapp?:number,
  distrito?:string
  token?:string
  transporte: boolean,
  telefone:string,
  nome: string;
  provincia: string;
  municipio: string;
  comuna:string,
  email:string
  bairro: string;
  rua: string;
  pasword?:string
  fto:string;
  iban?:string
  foto: File | null;
  nomeGestor?:string
  fotoGestor?:string

}
export interface client {
  type?:string
  id?:number
  nif?: string;
  token:string
  transporte?: boolean,
  telefone:string,
  whatsapp?:string
  nome: string;
  provincia?: string;
  municipio?: string;
  distrito?: string;
  iban?: string;
  comuna?:string,
  email:string
  bairro?: string;
  rua?: string;
  pasword?:string
  fto:string;
  foto: File | null;

  // Adicione outros campos conforme necessário
}

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextData {
  user: User | null;
  token: string | null;
  login: (token: string,type:string,client?:client, user?:User) => void;
  client :client | null;
  
  logout: () => void;
  foto:string,
  updateUserPhoto:(photo:string)=>Promise<boolean>
  updateUser: (updatedUser: User) =>Promise<boolean>;
}
export const api='http://localhost:4000'

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: AuthContextProps) {
  const [client, setClient] = useState<client>({
    id:undefined,
    nif: '',
     whatsapp:'',
    distrito:'',
    token:'',
    transporte:false,
    telefone:'',
    nome: '',
    provincia: '',
    municipio: '',
    comuna:'',
    email:'',
    bairro: '',
    rua: '',
    pasword:'',
    fto:'',
    iban:'',
    foto:  null,
 
  
  });
  const [user, setUser] = useState<User>({
    id:undefined,
    nif: '',
    descricao:'',
    whatsapp:0,
    distrito:'',
    token:'',
    transporte:false,
    telefone:'',
    nome: '',
    provincia: '',
    municipio: '',
    comuna:'',
    email:'',
    bairro: '',
    rua: '',
    pasword:'',
    fto:'',
    iban:'',
    foto:  null,
    nomeGestor:'',
    fotoGestor:''
  
  });
  const [token, setToken] = useState<string | null>(null);
  const [foto,setFoto]=useState<string>('')

  const login = (newToken: string,type:string,client?:client, newUser?: User) => {
    if(type==='fazenda'&& newUser){
    setUser(newUser);
    setFoto(newUser.fto)
    setToken(newToken);
    // Armazene o token de forma segura, por exemplo, em cookies ou local storage
    localStorage.setItem('OkukulaToken', newToken);
    localStorage.setItem('OkukulaUser', JSON.stringify(newUser));
    localStorage.setItem('OkukulaFoto',newUser.fto)
  }
  else if(type=='cliente'){
    if(client){
      setClient(client);
      console.log(client)
      setFoto(client.fto)
      setToken(newToken);
      // Armazene o token de forma segura, por exemplo, em cookies ou local storage
      localStorage.setItem('OkukulaToken', newToken);
      localStorage.setItem('OkukulaUserClient', JSON.stringify(client));
      localStorage.setItem('OkukulaFoto',client.fto)
    }
  

  }
}
 
  const updateUserPhoto = async (photo: string) => {
      try{
        if(photo!=''){

          setFoto(photo)
        }
        await  localStorage.setItem('OkukulaFoto', photo);
        return true
      }catch(error){
        console.log(error)
        return false
      }
  }
  const updateUser = async (updatedUse: User) => {
    try {
      if(updatedUse.id){
        console.log(updatedUse)
        const response = await UpdateFAzenda(updatedUse,updatedUse.id)
        console.log(response)
      if (response) {
        // Atualize o estado do usuário localmente
 
          setUser((prevUser) => ({ ...prevUser,
            
            descricao:response.descricao,
            whatsapp:Number(response.contacto.whatsapp),
            distrito:response.distrito,
            transporte:Boolean(response.transporte),
            telefone:response.contacto.telefone,
            nome:response.nome,
            provincia: response.provincia,
            municipio: response.municipio,
            comuna:response.comuna,
            email:response.contacto.email,
            bairro: response.bairro,
            rua: response.rua,
            
            iban:response.iban,
            foto:  null,
            nomeGestor:response.gestor.nome,
            fotoGestor:response.gestor.foto
          }));
          console.log('Context',updatedUse)
          await  localStorage.setItem('OkukulaUser', JSON.stringify({ ...user, ...updatedUse }));
            return true
          
  

        // Atualize o usuário no armazenamento local
       
      } else {
        console.error('Falha ao atualizar usuário no back-end');
        return false
      }

      }
      else
      return false
      
    } catch (error) {
      
      console.error('Erro ao atualizar usuário:', error);
      return false
    }
  };

  const logout = () => {
    if(user.type=='fazenda'){
      setUser({
        id:undefined,
        nif: '',
        descricao:'',
        whatsapp:0,
        distrito:'',
        token:'',
        transporte:false,
        telefone:'',
        nome: '',
        provincia: '',
        municipio: '',
        comuna:'',
        email:'',
        bairro: '',
        rua: '',
        pasword:'',
        fto:'',
        iban:'',
        foto:  null,
        nomeGestor:'',
        fotoGestor:''
      });
      setFoto('')
      localStorage.removeItem('OkukulaToken');
      localStorage.removeItem('OkukulaUser');
      localStorage.removeItem('OkukulaFoto')

    }
    else if(client.type=='cliente'){
      setUser({
        id:undefined,
        nif: '',
        descricao:'',
        whatsapp:0,
        distrito:'',
        token:'',
        transporte:false,
        telefone:'',
        nome: '',
        provincia: '',
        municipio: '',
        comuna:'',
        email:'',
        bairro: '',
        rua: '',
        pasword:'',
        fto:'',
        iban:'',
        foto:  null,
        nomeGestor:'',
        fotoGestor:''
      });
      setFoto('')
      localStorage.removeItem('OkukulaToken');
      localStorage.removeItem('OkukulaUserClient');
      localStorage.removeItem('OkukulaFoto')
    }
  
     // Adicionado para remover dados do usuário
  };

  useEffect(() => {
    // Verifique se há um token armazenado no carregamento
    const storedToken = localStorage.getItem('OkukulaToken');
    const storedClient=localStorage.getItem('OkukulaUserClient')
    if(storedClient){
      setClient(JSON.parse(storedClient))
    }
    const storedUser = localStorage.getItem('OkukulaUser');
    const foto=localStorage.getItem('OkukulaFoto')
  
    if (storedToken && storedUser&& foto) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      
      setFoto(foto)
    }
  }, []);

  const contextValue = {
    user,
    token,
    foto,
    client,
    updateUserPhoto,
    login,
    logout,
    setUser,
    updateUser
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
