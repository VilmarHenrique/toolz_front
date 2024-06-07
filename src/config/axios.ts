import axios from "axios";

const access_token = localStorage.getItem("access_token");

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});
