import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import {Calendar as CalendarRN, CalendarUtils} from 'react-native-calendars';

export function Calendar({trackedDays}: {trackedDays: string[]}){

  const [selected, setSelected] = useState('');

  type HabitCalendarType = {
    selectedColor: string;
    selected: boolean;
};

  type TransformedTrackedDatesType = {
      [key: string]: HabitCalendarType;
  };

  const transformedTrackedDates: TransformedTrackedDatesType = trackedDays.reduce((acc: TransformedTrackedDatesType, date: string) => {
    acc[`${new Date(date).getFullYear()}-${(new Date(date).getMonth()+1).toString().padStart(2, "0")}-${new Date(date).getDate()}`] = { selectedColor: '#6676ce', selected: true };
    return acc;
  }, {});

  return (
    <CalendarRN style={{borderRadius: 7}}
      theme={{
        calendarBackground: '#292f47',
        dayTextColor: '#ffffff',
        todayTextColor: '#6676ce',
        monthTextColor: '#ffffff',
        textSectionTitleColor: '#ffffff',
        textSectionTitleDisabledColor: 'blue',
        indicatorColor: 'red',
        selectedDayBackgroundColor: '#6676ce',
        arrowColor: '#ffffff',
      }}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={transformedTrackedDates}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292f47'
  }
})
