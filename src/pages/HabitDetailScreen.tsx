import React from 'react'
import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Calendar } from '../components/Calendar/Calendar'
import { Header } from '../components/Header/Header'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../App'

export function HabitDetailScreen(){

  const navigation = useNavigation<StackTypes>()

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Primeiro hábitovd fvfdvfd' isDetailScreen={true} goBack={() => navigation.goBack()}/>
      <View style={styles.contentContainer}>
        <Calendar/>
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
