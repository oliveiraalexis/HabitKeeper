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