import React from 'react'
import { View } from 'react-native'
import { Header } from '../components/Header/Header'
import { DatesTitle } from '../components/DatesTitle/DatesTitle'
import { CondensedHabit } from '../components/CondensedHabit/CondensedHabit'

export function HabitListScreen(){

  return (
    <View>
      <Header title='HÁBITOS'/>
      <DatesTitle/>
      <CondensedHabit habit={{title: 'Primeiro hábito', last4Days: [false, true, true, true]}}/>
      <CondensedHabit habit={{title: 'Segundo hábito', last4Days: [true, true, false, true]}}/>
    </View>
  )
}
