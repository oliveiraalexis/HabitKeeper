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
export function DatesTitle({last4Days}: {last4Days: number[]}) {

  return (
    <View style={styles.container}>
      {
        last4Days.map(
          (date, key) => 
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
