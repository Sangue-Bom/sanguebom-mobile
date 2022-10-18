import axios from "axios";

const api = axios.create({
  baseURL: "https://api-sanguebom.herokuapp.com",
});

export default api;
