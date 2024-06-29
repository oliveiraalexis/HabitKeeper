import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StyleSheet, Text, Alert } from 'react-native'
import { Calendar } from '../components/Calendar/Calendar'
import { Header } from '../components/Header/Header'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../App'
import { HabitProps, useHabit } from '../controllers/useHabit'

export function HabitDetailScreen({route}: any){

  const habitId = route.params
  const navigation = useNavigation<StackTypes>()
  const [habit, setHabit] = useState<HabitProps>({
    _id: '',
    name: '',
    user_id: '',
    trackedDays: [],
    createdAt: '',
    __v: 0
  })
  const {userId, getHabit} = useHabit()

  useEffect(() => {
    searchHabit()
  },[])

  async function searchHabit() {
    const habit = await getHabit(userId, habitId)
    setHabit(habit)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={habit.name} isDetailScreen={true} onPress={() => navigation.goBack()}/>
      <View style={styles.contentContainer}>
        <Calendar habit={habit} searchHabit={searchHabit}/>
        <Text style={styles.text}>Total de dias marcados: 0</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161927',
    flex: 1,
    padding: 10
  },
  contentContainer: {
    paddingHorizontal: 20
  },
  text:{
    textAlign: 'center',
    margin: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15
  }
})
