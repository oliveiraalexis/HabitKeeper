import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Header } from './components/Header/Header'
import { DatesTitle } from './components/DatesTitle/DatesTitle'

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title='HÁBITOS'/>
        <DatesTitle/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161927',
    flex: 1,
    padding: 15
  }
})

export default App;
