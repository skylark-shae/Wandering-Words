import { getToken } from "./AuthService";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4200/api";

axios.interceptors.request.use((config) => {
  const token = getToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
