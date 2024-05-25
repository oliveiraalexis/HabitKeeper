import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import {Calendar as CalendarRN, CalendarUtils} from 'react-native-calendars';

export function Calendar(){

  const [selected, setSelected] = useState('');

  const INITIAL_DATE = '2024-05-20';

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

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
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedColor: '#6676ce'},
        [getDate(0)]: {selectedColor: '#6676ce', selected: true},
        [getDate(-1)]: {selectedColor: '#6676ce', selected: true},
        [getDate(-2)]: {selectedColor: '#6676ce', selected: true},
        [getDate(-3)]: {selectedColor: '#6676ce', selected: true},
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292f47'
  }
})
