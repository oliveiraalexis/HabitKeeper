import { axiosBase } from "../helpers/axiosBase"
import { Alert } from "react-native"

export function useHabit() {

  const userId = '6649476dac7f48df621de7af'

  async function getHabits(userId: string) {

    try {
      const response = await axiosBase.get(`/user/${userId}/habits`)
      return response.data
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível carregar seus hábitos. Verifique sua conexão ou tente novamente mais tarde.')
      return []
    }
  }
  

  async function getHabit(userId: string, habitId: string) {
    try {
      const response = await axiosBase.get(`/user/${userId}/habit/${habitId}`)
      return response.data
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível carregar os dados do hábito. Verifique sua conexão ou tente novamente mais tarde.')
      return {}
    }
  }

  async function createHabit(userId: string, habitName: string) {
    try {
      const data = {
        name: habitName,
        user_id: userId,
      }
      const response = await axiosBase.post(`/habits`, data)
      return response.data
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível criar o hábito. Verifique sua conexão ou tente novamente mais tarde.')
      return {}
    }
  }

  async function deleteHabit(habitId: string) {
    try {
      const response = await axiosBase.delete(`/habit/${habitId}`)
      return response.status
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível excluir o hábito. Verifique sua conexão ou tente novamente mais tarde.')
      return null
    }
  }

  return {userId, getHabits, getHabit, createHabit, deleteHabit}
}