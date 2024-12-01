export interface IUserModel {
  email: string;
  username: string;
  password: string;
}
export interface ILoginModel {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface ITokenData {
  id: string;
  exp: number;
}

export interface IUserResponse {
  id: string;
  username: string;
  email: string;
  password: string;
}
