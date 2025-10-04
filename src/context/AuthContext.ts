import type {RegisterUserRequest, RegisterUserResponse} from "../services/auth";
import {createContext} from "react";
import type {User} from "../types";

interface AuthContextType {
  user: User | null;
  authenticated: boolean;
  register: (request: RegisterUserRequest) => Promise<RegisterUserResponse>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);