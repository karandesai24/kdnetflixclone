import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://kdnetflixclone.herokuapp.com/api/",
});
