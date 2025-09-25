import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
    addClass(classObj) {
    return apiClient.post("/classes", classObj, { crossOrigin: true });
  },
}