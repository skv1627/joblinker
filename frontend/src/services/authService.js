import axios from "axios";

const API_URL = "/api/auth/";

const register = (userData) => axios.post(API_URL + "register", userData);

const login = (credentials) => axios.post(API_URL + "login", credentials);

export default {
  register,
  login
};
