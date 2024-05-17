import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Calendar } from '../components/Calendar/Calendar'
import { Header } from '../components/Header/Header'

export function HabitDetailScreen(){

  return (
    <View>
      <Header title='Primeiro hábitovd fvfdvfd' isDetailScreen={true}/>
      <View style={styles.contentContainer}>
        <Calendar/>
        <Text style={styles.text}>Total de dias marcados: 0</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    marginBottom: 30
  },
  text:{
    alignSelf: 'center',
    margin: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15
  }
})
