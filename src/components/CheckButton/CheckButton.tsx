import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useHabit, HabitProps } from '../../controllers/useHabit'
import { useSelectDay } from '../../hooks/useSelectDay'

type CheckButtonProps = {
  habit: HabitProps,
  date: number,
  searchHabits: () => void
}

function formatDate(timestamp: number){
  return `${new Date(timestamp).getFullYear()}-${new Date(timestamp).getMonth()+1}-${new Date(timestamp).getDate()}`
}

// function dateExistsInArray(date: number, trackedDays: string[]){

//   if (trackedDays.length > 0){
//     const result = trackedDays.find(el => new Date(parseInt(el)).getDate() == new Date(date).getDate())
//     return result != undefined
//   }
//   return false
// }

export function CheckButton({habit, date, searchHabits}: CheckButtonProps){
  
  const [iconColor, setIconColor] = useState('#888888')
  const [iconName, setIconName] = useState('close-circle-outline')
  const [isChecked, setIsChecked] = useState(false)
  const {dateExistInArray, updateHabitTracker} = useSelectDay()

  useEffect(() => {
    setIsChecked(dateExistInArray(date, habit.trackedDays))
  },[])
  
  useEffect(() => {
    setIconColor(isChecked ? '#6676ce' : '#888888')
    setIconName(isChecked ? 'checkmark-circle-sharp' : 'close-circle-outline')
    searchHabits()
  },[isChecked])

  return (
    <TouchableOpacity style={styles.container} onPress={() => updateHabitTracker(habit, date, isChecked, setIsChecked)}>
      <Icon name={iconName} color={iconColor} size={26}/>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4.7,
    borderRadius: 8
  }
})