import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import {Calendar as CalendarRN, LocaleConfig} from 'react-native-calendars';

export function Calendar(){

  const [selected, setSelected] = useState('');

  return (
    <CalendarRN
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}
      }}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 30
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
}
})
