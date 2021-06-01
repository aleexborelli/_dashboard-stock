import { createContext, useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';
import api from '../services/api';
import Router from 'next/router';


type User = {
  id: string;
  name: string;
  email: string;
};

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@Ecommerce:Token':token } = parseCookies()

    if(token){
      api.get(`/users/${user.id}`).then(response => {
        setUser(response.data)
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const response = await api.post('/sessions', { email, password });
    const { token, user } = response.data;

    console.log({ token, user });
    setCookie(undefined, '@Ecommerce:Token', token, {
      maxAge: 60 * 60 * 24, // 1 day
    });

    setUser(user);

    Router.push('dashboard');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
