import axios from "axios";
const baseURL = "http://localhost:3001/api"

export const getUsers = () => {
    return axios.get(`${baseURL}/user`)
}

export const createUser = (body) => {
    return axios.post(`${baseURL}/user`,body)
}

export const deletedUserId = (id) => {
    return axios.delete(`${baseURL}/user/${id}`)
}