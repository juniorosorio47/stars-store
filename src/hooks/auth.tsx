import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';
import { useToast } from './toast';

interface User  {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface AuthCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    token: string;
    signIn(credentials:AuthCredentials): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider:React.FC = ({ children }) =>{
    const { addToast } = useToast();

    const [data, setData] = useState<AuthState>(()=>{

        const token = localStorage.getItem('@star-store:token');
        const user = localStorage.getItem('@star-store:user');

        if(token && user){
            
            api.interceptors.request.use(
                (config) => {
                    const token = localStorage.getItem('@star-store:token');
            
                    
                    token && (config.headers = {'Authorization': `Barear ${token}`});
            
                    return config;
                }, 
            
                (error) => {
                    return Promise.reject(error);
                });

            return { token, user:JSON.parse(user) };
        }


        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password }) =>{
        const response = await api.post('login', { email, password})

        const { token, user } = response.data;

        localStorage.setItem('@star-store:token', token);
        localStorage.setItem('@star-store:user', JSON.stringify(user));

        api.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('@star-store:token');
        
                
                token && (config.headers = {'Authorization': `Barear ${token}`});
        
                return config;
            }, 
        
            (error) => {
                return Promise.reject(error);
            });

        setData({ token, user });
    
    },[])

    const signOut = useCallback(async() => {
        localStorage.removeItem('@star-store:token');
        localStorage.removeItem('@star-store:user');

        try{
            const response = await api.post('/logout',);

            addToast({title: response.data.message, type: 'success' });

        }catch(err) {
            console.log(err);
        }

        setData({} as AuthState);
    }, [])

    return (
        <AuthContext.Provider value={{ user: data.user, token: data.token, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )
};



export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

