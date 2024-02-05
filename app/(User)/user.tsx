"use client"
import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

export interface User {
  id?:number
  nif: string;

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
  foto: File | null;

}

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextData {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (newToken: string, newUser: User) => {
    setUser(newUser);
    setToken(newToken);
    // Armazene o token de forma segura, por exemplo, em cookies ou local storage
    localStorage.setItem('OkukulaToken', newToken);
    localStorage.setItem('OkukulaUser', JSON.stringify(newUser));
  };
  const signUp = (newToken: string, newUser: User) => {
    setUser(newUser);
    setToken(newToken);
    // Armazene o token de forma segura, por exemplo, em cookies ou local storage
    localStorage.setItem('OkukulaToken', newToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('OkukulaToken');
    localStorage.removeItem('OkukulaUser');  // Adicionado para remover dados do usuário
  };

  useEffect(() => {
    // Verifique se há um token armazenado no carregamento
    const storedToken = localStorage.getItem('OkukulaToken');
    const storedUser = localStorage.getItem('OkukulaUser');
  
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const contextValue = {
    user,
    token,
    login,
    logout,
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
