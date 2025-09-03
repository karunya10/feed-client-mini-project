import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const json = localStorage.getItem("authToken");
  try {
    if (json) {
      config.headers.Authorization = `Bearer ${json}`;
    }
    return config;
  } catch (error) {
    console.log(error);
  }
});

export default api;
