export interface ErrorResponse {
  success: false;
  error: string;
  statusCode: number;
}

export class BaseApiError extends Error {

  public readonly responseData: ErrorResponse;
  public readonly statusCode: number;

  constructor(message: string, responseData: ErrorResponse) {
    super(message);
    this.name = 'APIError';
    this.responseData = responseData;
    this.statusCode = responseData.statusCode;

    Object.setPrototypeOf(this, BaseApiError.prototype);
  }
}