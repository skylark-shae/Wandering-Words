import { AxiosResponse } from "axios";
import {
  ILoginModel,
  ILoginResponse,
  ITokenData,
  IUserModel,
} from "../model/Auth";
import HttpService from "./HttpService";

const registerUser = (data: IUserModel): Promise<AxiosResponse> => {
  return HttpService.post("/auth/register", data);
};

const login = (data: ILoginModel): Promise<AxiosResponse<ILoginResponse>> => {
  return HttpService.post("/auth/login", data);
};

const TOKEN = "accessToken";
const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

const getToken = () => {
  return localStorage.getItem(TOKEN);
};

const getTokenData = () => {
  const token = getToken();
  if (!token) {
    return;
  }

  const payload = token.split(".")[1];
  console.log(payload);
  console.log(JSON.parse(atob(payload)));

  return JSON.parse(atob(payload)) as ITokenData;
};
const isTokenValid = () => {
  const tokenData = getTokenData();
  if (tokenData === null) {
    return false;
  }

  return tokenData ? tokenData.exp * 1000 > Date.now() : null;
};

export { registerUser, login, setToken, getToken, isTokenValid, getTokenData };
