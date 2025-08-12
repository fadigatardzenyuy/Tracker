import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface User { id: string; name: string; email: string; phone: string; }
interface AuthContextType { user: User | null; login: (userData: User) => void; logout: () => void; isAuthenticated: boolean; }

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('camtrackUser');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);
  const login = (userData: User) => { localStorage.setItem('camtrackUser', JSON.stringify(userData)); setUser(userData); };
  const logout = () => { localStorage.removeItem('camtrackUser'); setUser(null); };
  return <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>{children}</AuthContext.Provider>;
};