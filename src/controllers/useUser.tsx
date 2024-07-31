import { axiosBase } from "../helpers/axiosBase"
import { Alert } from "react-native"
import { search, save, remove, storageKey} from "../services/Storage"
import { jwtDecode } from "jwt-decode"

export type UserProps = {
  name: string,
  username: string,
  password: string
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
      if (response?.data?.token) {
        save(storageKey, {userId: response.data.user._id, token: response.data.token})
      }
      return response.data
    } catch(error: any){
      if (error?.response?.status == 500) Alert.alert('Atenção', 'Não foi possível buscar o usuário. Verifique sua conexão ou tente novamente mais tarde.')
      return error?.response
    }
  }

  async function logoutUser(navigation: any){
    remove(storageKey)
    navigation.replace('LoginScreen')
  }

  function isTokenExpired() {
    const token: {token: string, userId: string} | null = search(storageKey) as {token: string, userId: string} | null
    if(token){
      const decoded = jwtDecode(token?.token)
      const currentTime = Date.now() / 1000
      if (decoded?.exp && decoded?.exp < currentTime) {
        remove(storageKey);
        return true
      }
      return false
    } else {
      return true
    }
  }

  async function createUser(user: UserProps) {
    try {
      const response = await axiosBase.post(`/users`, user)
      return response
    } catch(error: any){
      if (error?.response?.status == 500) Alert.alert('Atenção', 'Não foi possível cadastrar o usuário. Verifique sua conexão ou tente novamente mais tarde.')
      return error?.response
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

  async function updateUser(userId: string, newUser: UserProps) {
    try {
      const response = await axiosBase.put(`/user/${userId}`, newUser)
      return response
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível atualizar seus dados. Verifique sua conexão ou tente novamente mais tarde.')
      return error
    }
  }

  return {getUsers, getUser, createUser, deleteUser, loginUser, updateUser, isTokenExpired, logoutUser}
}