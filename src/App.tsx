import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Header } from './components/Header/Header'
import { DatesTitle } from './components/DatesTitle/DatesTitle'
import { CondensedHabit } from './components/CondensedHabit/CondensedHabit'

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title='HÁBITOS'/>
        <DatesTitle/>
        <CondensedHabit habit={{title: 'Primeiro hábito', last4Days: [false, true, true, true]}}/>
        <CondensedHabit habit={{title: 'Primeiro hábito', last4Days: [false, true, true, true]}}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161927',
    flex: 1,
    padding: 10
  }
})

export default App;
