import React from 'react'
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native'
import { CheckButton } from '../CheckButton/CheckButton'
import { HabitProps } from '../../controllers/useHabit'

type CondensedHabitProp = {
  habit: HabitProps,
  last4Days: number[],
  searchHabits: () => void,
  onPress: () => void
}

export function CondensedHabit({habit, last4Days, searchHabits, onPress}: CondensedHabitProp) {

  return (
    <TouchableHighlight onPress={onPress} underlayColor={'#444c6e'} style={styles.touchable}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>{habit.name}</Text>
        </View>
        <View style={styles.dates}>
          {
            last4Days.map((day, key) =>{
              return <CheckButton habit={habit} date={day} searchHabits={searchHabits} key={key}/>
            })
          }
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#292f47',
    borderRadius: 10,
    height: 70,
    marginTop: 10,
    paddingLeft: 10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'

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