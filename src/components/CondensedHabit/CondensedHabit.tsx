import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { CheckButton } from '../CheckButton/CheckButton'

type CondensedHabitProp = {
  habit: {
    name: string,
    trackedDays: number[]
  },
  last4Days: number[],
  onPress: () => void
}

export function CondensedHabit({habit, last4Days, onPress}: CondensedHabitProp) {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.title}>
        <Text style={styles.text}>{habit.name}</Text>
      </View>
      <View style={styles.dates}>
        {
          habit.trackedDays.map((day, key) =>{
            return <CheckButton isCheckedDay={(new Date(day).getDate() == new Date(last4Days[key]).getDate())} key={key}/>
          })
        }
      </View>
    </TouchableOpacity>
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
    marginTop: 10,
    paddingLeft: 10,
    paddingVertical: 10

  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  title: {
    width: '57%',
    alignContent: 'flex-end'
  },
  dates: {
    width: '43%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})