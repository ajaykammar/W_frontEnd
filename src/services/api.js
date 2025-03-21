import axios from "axios";
const JWTToken = localStorage.getItem("authToken");
const api = axios.create({
  // baseURL: "https://jubilant-palm-tree-qggvj6vr77rf44ww-2930.app.github.dev/",
  baseURL: " http://localhost:2000/",
  headers: {
    "Content-Type": "application/json",
    token: `Bearer ${JWTToken}`,
  },
});

export default api;
