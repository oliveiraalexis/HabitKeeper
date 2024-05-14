import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Header } from './components/Header/Header'
import { DatesTitle } from './components/DatesTitle/DatesTitle'

const datas = [
  '2024-05-11T01:08:32.825Z',
  '2024-05-12T01:08:32.825Z',
  '2024-05-13T01:08:32.825Z',
  '2024-05-14T01:08:32.825Z'
]

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
