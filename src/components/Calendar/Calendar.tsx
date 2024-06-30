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

export function Calendar({habit, searchHabit}: {habit: HabitProps, searchHabit: () => void}){

  const {updateHabitTracker} = useSelectDay()

  useEffect(() => {
    searchHabit()
  },[updateHabitTracker])

  const transformedTrackedDates: TransformedTrackedDatesType = habit.trackedDays.reduce((acc: TransformedTrackedDatesType, date: string) => {
    acc[`${new Date(parseInt(date)).getFullYear()}-${(new Date(parseInt(date)).getMonth()+1).toString().padStart(2, "0")}-${new Date(parseInt(date)).getDate()}`] = { selectedColor: '#6676ce', selected: true };
    return acc;
  }, {});

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
      onDayPress={day => {
        const date = new Date(day.dateString).getTime() + new Date(day.dateString).getTimezoneOffset()*60000
        const isDateSelected = transformedTrackedDates.hasOwnProperty(day.dateString)
        updateHabitTracker(habit, date, isDateSelected)
      }}
      markedDates={transformedTrackedDates}
    />
  );
}
