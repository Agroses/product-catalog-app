import { createContext, useContext } from 'react';

interface AuthContextProps {
  login: (username: string, password: string) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const login = (username: string, password: string) => {
      if (username === 'saif' && password === 'azzam') {
        // Perform your authentication logic for a successful login
        console.log('Authentication successful!');
      } else {
        // Handle authentication failure
        console.log('Authentication failed!');
      }
    };

  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  );
}
