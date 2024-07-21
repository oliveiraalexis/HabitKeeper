import { axiosBase } from "../helpers/axiosBase"
import { Alert } from "react-native"

export type HabitProps = {
  _id: string,
  name: string,
  user_id: string,
  trackedDays: string[],
  createdAt: string,
  __v: number
}

export function useHabit() {

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

  async function updateHabit(habitId: string, newHabit: HabitProps) {
    try {
      const response = await axiosBase.put(`/habit/${habitId}`, newHabit)
      return response.data
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível editar o hábito. Verifique sua conexão ou tente novamente mais tarde.')
      return {}
    }
  }

  return {getHabits, getHabit, createHabit, deleteHabit, updateHabit}
}