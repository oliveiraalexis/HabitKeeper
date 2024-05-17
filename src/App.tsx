import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { HabitListScreen } from './pages/HabitListScreen'
import { HabitDetailScreen } from './pages/HabitDetailScreen'

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HabitListScreen/> */}
      <HabitDetailScreen/>
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
