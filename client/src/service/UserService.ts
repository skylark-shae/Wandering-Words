import { AxiosResponse } from "axios";
import HttpService from "./HttpService";
import { IUserResponse } from "../model/Auth";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUser = (id: string): any => {
  return HttpService.get(`/users/${id}`);
};

export { getUser };
