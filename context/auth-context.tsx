"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem("isAdminAuthenticated");
    if (session === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (password: string) => {
    // In a real application, you'd verify the password against a backend.
    // For this example, we'll use a simple hardcoded password.
    if (password === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAdminAuthenticated", "true");
      router.push("/admin");
    } else {
      throw new Error("Invalid password");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("isAdminAuthenticated");
    router.push("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
