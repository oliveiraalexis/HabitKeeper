import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Calendar } from '../components/Calendar/Calendar'
import { Header } from '../components/Header/Header'

export function HabitDetailScreen(){

  return (
    <View>
      <Header title='Primeiro hábitovd fvfdvfd' isDetailScreen={true}/>
      <Calendar/>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 30
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
}
})
