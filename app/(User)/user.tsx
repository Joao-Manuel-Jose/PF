"use client"
import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

interface User {
  name: string;
  password: string;
  email: string;
  isLogged: boolean;
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
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    // Remova o token do armazenamento
    localStorage.removeItem('OkukulaToken');
  };

  useEffect(() => {
    // Verifique se há um token armazenado no carregamento
    const storedToken = localStorage.getItem('OkukulaToken');
    if (storedToken) {
      // Se encontrar um token, defina o usuário como autenticado
      setToken(storedToken);
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
