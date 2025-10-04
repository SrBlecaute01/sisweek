import {type ReactNode, useEffect, useState} from "react";
import { AuthContext } from "../context";
import { authService, type RegisterUserRequest, type RegisterUserResponse } from "../services/auth";
import type { User } from "../types";

const LOCAL_STORAGE_TOKEN_KEY = "token";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY));
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (!token) {
      handleLogout();
      return;
    }

    authService.me(token)
        .then((user) => {
          setUser(user.data);
          setAuthenticated(true);
        })
        .catch(() => { handleLogout() });
  }, [token]);

  const register = async (request: RegisterUserRequest): Promise<RegisterUserResponse> => {
    const response = await authService.registerUser(request);
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.token);

    setUser(response.data.user)
    setToken(response.data.token);
    setAuthenticated(true);

    return response;
  };

  const logout = () => {
    handleLogout(true);
  }

  const handleLogout = (removeToken: boolean = false) => {
    setUser(null);
    setAuthenticated(false);

    if (removeToken) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
      setToken(null);
    }
  };

  return (
      <AuthContext.Provider value={{ user, authenticated, register, logout }}>
        {children}
      </AuthContext.Provider>
  );
};