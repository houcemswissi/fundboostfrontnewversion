export interface AuthRequest {
    username: string;
    password: string;
  }
  
  export interface AuthResponse {
    jwt: string;
  }