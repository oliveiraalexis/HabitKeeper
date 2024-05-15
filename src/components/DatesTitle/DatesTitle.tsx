import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const weekday = [
  'DOM',
  'SEG',
  'TER',
  'QUA',
  'QUI',
  'SEX',
  'SÁB'
]

function getLast4Days() {
  const currentDay = new Date()
  return [
    currentDay.getTime() - currentDay.getTimezoneOffset()*60000,
    currentDay.setDate(currentDay.getDate() - 1) - currentDay.getTimezoneOffset()*60000,
    currentDay.setDate(currentDay.getDate() - 1) - currentDay.getTimezoneOffset()*60000,
    currentDay.setDate(currentDay.getDate() - 1) - currentDay.getTimezoneOffset()*60000,
  ]
}

export function DatesTitle() {

  const dates = getLast4Days()

  return (
    <View style={styles.container}>
      {
        dates.map(
          (date: number, key) => 
          (
            <View style={styles.date} key={key}>
              <Text style={styles.days}>{new Date(date).getDate()}</Text>
              <Text style={styles.weekdays}>{weekday[new Date(date).getDay()]}</Text>
            </View>
          )
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  date: {
    marginHorizontal: 8,
    alignItems: 'center',
  },
  days: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 11
  },
  weekdays: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 10
  }
});
