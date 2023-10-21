import axios from "axios";
const baseURL = "http://localhost:3001/api"

export const loginSubmit = (body) => {
    return axios.post(`${baseURL}/login`,body)
}