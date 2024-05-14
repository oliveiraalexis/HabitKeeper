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
  console.log(dates)

  return (
    <View style={styles.container}>
      {
        dates.map(
          (date: number, key) => 
          (
            <View style={styles.date} key={key}>
              <Text style={styles.text}>{new Date(date).getDate()}</Text>
              <Text style={styles.text}>{weekday[new Date(date).getDay()]}</Text>
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
    marginLeft: 20,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12
  }
});
