import { axiosBase } from "../helpers/axiosBase"
import { Alert } from "react-native"

export type UserProps = {
  _id: string,
  name: string,
  username: string,
  password: string,
  createdAt: string,
  __v: number
}

export function useUser() {

  async function getUsers() {
    try {
      const response = await axiosBase.get(`/users`)
      return response.data
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível buscar os usuários. Verifique sua conexão ou tente novamente mais tarde.')
      return []
    }
  }
  

  async function getUser(userId: string) {
    try {
      const response = await axiosBase.get(`/user/${userId}`)
      return response.data
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível buscar o usuário. Verifique sua conexão ou tente novamente mais tarde.')
      return {}
    }
  }

  async function loginUser(username: string, password: string) {
    try {
      const data = {
        username,
        password
      }
      const response = await axiosBase.post(`/login`, data)
      return response.data
    } catch(error: any){
      if (error?.response?.status == 500) Alert.alert('Atenção', 'Não foi possível buscar o usuário. Verifique sua conexão ou tente novamente mais tarde.')
      return error?.response
    }
  }

  async function createUser(user: UserProps) {
    try {
      const response = await axiosBase.post(`/users`, user)
      return response.data
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível criar o hábito. Verifique sua conexão ou tente novamente mais tarde.')
      return {}
    }
  }

  async function deleteUser(userId: string) {
    try {
      const response = await axiosBase.delete(`/user/${userId}`)
      return response.status
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível excluir o usuário. Verifique sua conexão ou tente novamente mais tarde.')
      return null
    }
  }

  return {getUsers, getUser, createUser, deleteUser, loginUser}
}