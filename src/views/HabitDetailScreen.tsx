import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StyleSheet, Text, Alert } from 'react-native'
import { Calendar } from '../components/Calendar/Calendar'
import { Header } from '../components/Header/Header'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../App'
import { useHabit } from '../controllers/useHabit'

export function HabitDetailScreen({route}: any){

  const navigation = useNavigation<StackTypes>()
  const habit = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Header title={habit.name} isDetailScreen={true} onPress={() => navigation.goBack()}/>
      <View style={styles.contentContainer}>
        <Calendar trackedDays={habit.trackedDays}/>
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
