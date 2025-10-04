import {AxiosError, type AxiosInstance} from "axios";
import {BaseApiError, type ErrorResponse} from "../BaseApiError.ts";
import authApi from "./authApi.ts";

export interface UserData {
  role: string;
  isActive: boolean;
  id: number;
  name: string;
  email: string;
  qrCodeContent: string;
  updated_at: string;
  created_at: string;
}

export interface RegisterUserData {
  token: string;
  user: UserData;
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

export class AuthService {

  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async registerUser(data: RegisterUserRequest): Promise<RegisterUserResponse> {
    return await this.api.post('/auth/register', data)
        .then(res => res.data)
        .catch(error => {
          const axiosError = error as AxiosError<ErrorResponse>;
          if (axiosError.isAxiosError && axiosError.response) {
            const errorResponse: ErrorResponse = {
              ...axiosError.response.data,
              statusCode: axiosError.response.status,
            };
            throw new BaseApiError(errorResponse.error, errorResponse);
          }
          throw error;
        });
  }
}

export const authService = new AuthService(authApi);