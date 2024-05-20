import React, { useEffect, useState } from "react"
import { axiosBase } from "../helpers/axiosBase"
import { Alert } from "react-native"

export function useHabit() {

  const userId = '6649476dac7f48df621de7af'
  const [habits, setHabits] = useState([])

  useEffect(() => {
    getHabits(userId)
  }, [])

  async function getHabits(userId: string) {

    try {
      const response = await axiosBase.get(`/user/${userId}/habits`)
      setHabits(response.data)
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível carregar seus hábitos. Verifique sua conexão ou tente novamente mais tarde.')
    }
  }
  

  async function getHabit(userId: string, habitId: string) {
    try {
      const response = await axiosBase.get(`/${userId}//habit/${habitId}`)
      setHabits(response.data)
    } catch(error: any){
      Alert.alert('Atenção', 'Não foi possível carregar os dados do hábito. Verifique sua conexão ou tente novamente mais tarde.')
    }
  }

  return {habits, getHabits, getHabit}
}