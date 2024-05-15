import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { CheckButton } from '../CheckButton/CheckButton'

type CondensedHabitProp = {
  habit: {
    title: string,
    last4Days: boolean[]
  }
}

export function CondensedHabit({habit}: CondensedHabitProp) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{habit.title}</Text>
      </View>
      <View style={styles.dates}>
        {
          habit.last4Days.map((day, key) =>{
            return <CheckButton isCheckedDay={day}/>
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#292f47',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    height: 70,
    marginTop: 10

  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginHorizontal: 15
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})