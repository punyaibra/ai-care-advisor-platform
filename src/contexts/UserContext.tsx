
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner';

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserProfile: (data: Partial<User>) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  isLoggedIn: false,
  isLoading: true,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  updateUserProfile: () => {},
});

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check for existing user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Update localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    setIsLoading(true);
    
    try {
      // For demo purposes, accept any valid-looking email and password
      if (!email || !password || password.length < 6) {
        toast.error("Invalid email or password");
        return false;
      }
      
      // Artificial delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Create a mock user
      const mockUser: User = {
        id: Math.random().toString(36).substring(2, 15),
        name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' '),
        email: email
      };
      
      setUser(mockUser);
      return true;
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Validation
      if (!name || !email || !password || password.length < 6) {
        toast.error("Please provide valid information");
        return false;
      }
      
      // Artificial delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 15),
        name,
        email
      };
      
      setUser(newUser);
      return true;
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUserProfile = (data: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...data } : null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isLoading,
        login,
        register,
        logout,
        updateUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
