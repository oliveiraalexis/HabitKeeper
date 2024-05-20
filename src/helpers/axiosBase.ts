import axios from "axios"

export const axiosBase = axios.create({
  baseURL: 'http://192.168.1.12:3000'
})