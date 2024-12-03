import { deleteActiveUser } from "../LocalStorage";
import { getToken, setToken } from "./AuthService";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_URL;
console.log(import.meta.env.VITE_URL);

axios.interceptors.request.use((config) => {
  const token = getToken();
  config.headers.Bearer = `${token}`;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    //const url = response.config.url;

    //setLocalStorageToken(token);
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      //(`unauthorized :)`);
      //localStorage.removeItem("persist:root");
      //removeLocalStorageToken
      window.location.href = "/login";
      setToken("");
      deleteActiveUser();
    }
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
