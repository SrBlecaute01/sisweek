import {AxiosError, type AxiosInstance} from "axios";
import {BaseApiError, type ErrorResponse} from "../BaseApiError.ts";
import authApi from "./authApi.ts";
import type {User} from "../../types";

export interface RegisterUserData {
  token: string;
  user: User;
}

export interface RegisterUserResponse {
  success: true;
  data: RegisterUserData;
  message: string;
}

export interface RegisterUserRequest {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export interface UserResponse {
  success: true;
  data: User;
}

export class AuthService {

  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async me(token: string): Promise<UserResponse> {
    return await this.api
        .get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((res) => res.data)
        .catch(error => this.handleError(error))
  }
  
  async registerUser(data: RegisterUserRequest): Promise<RegisterUserResponse> {
    return await this.api.post('/auth/register', data)
        .then(res => res.data)
        .catch(error => this.handleError(error));
  }

  private handleError(error: unknown) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.isAxiosError && axiosError.response) {
      const errorResponse: ErrorResponse = {
        ...axiosError.response.data,
        statusCode: axiosError.response.status,
      };
      throw new BaseApiError(errorResponse.error, errorResponse);
    }
    throw error;
  }

}

export const authService = new AuthService(authApi);