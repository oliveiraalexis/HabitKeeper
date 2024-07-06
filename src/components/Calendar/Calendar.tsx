import React, {useEffect, useState} from 'react'
import { StyleSheet } from 'react-native'
import {Calendar as CalendarRN} from 'react-native-calendars';
import { useSelectDay } from '../../hooks/useSelectDay';
import { HabitProps } from '../../controllers/useHabit';

type HabitCalendarType = {
  selectedColor: string;
  selected: boolean;
};

type TransformedTrackedDatesType = {
    [key: string]: HabitCalendarType;
};

type CalendarDayType = {
  dateString: string
  day: number
  month: number
  timestamp: number
  year: number
}

export function Calendar({habit}: {habit: HabitProps}){

  const {updateHabitTracker} = useSelectDay()
  const [transformedTrackedDates, setTransformedTrackedDates] = useState<TransformedTrackedDatesType>({})

  function transformDate(date: string): string {
    const d = new Date(parseInt(date))
    const year = d.getFullYear()
    const month = (d.getMonth() + 1).toString().padStart(2, "0")
    const day = d.getDate().toString().padStart(2, "0")
    return `${year}-${month}-${day}`
  }
    
  useEffect(() => {
    const newTrackedDates = habit.trackedDays.reduce((acc: TransformedTrackedDatesType, date: string) => {
      const formattedDate = transformDate(date)
      acc[formattedDate] = { selectedColor: '#6676ce', selected: true }
      return acc
    }, {})
    setTransformedTrackedDates(newTrackedDates)
  },[habit])

  return (
    <CalendarRN style={{borderRadius: 7}}
      theme={{
        calendarBackground: '#292f47',
        dayTextColor: '#ffffff',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#6676ce',
        monthTextColor: '#ffffff',
        textSectionTitleColor: '#ffffff',
        arrowColor: '#ffffff',
      }}
      onDayPress={
        (day: CalendarDayType) => {
          const date = new Date(day.dateString).getTime() + new Date(day.dateString).getTimezoneOffset()*60000
          const isDateSelected = transformedTrackedDates.hasOwnProperty(day.dateString)
          let newTrackedDates = {...transformedTrackedDates}

          if (isDateSelected) {
            delete newTrackedDates[day.dateString]
          } else {
            newTrackedDates[day.dateString] = { selectedColor: '#6676ce', selected: true }
          }
          setTransformedTrackedDates(newTrackedDates)
          updateHabitTracker(habit, date, isDateSelected)
        }
      }
      markedDates={transformedTrackedDates}
    />
  );
}
