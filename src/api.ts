import axios from "axios";

const api = axios.create({
  baseURL: "https://app.patternProjectTest.app/",
});

export default api;
