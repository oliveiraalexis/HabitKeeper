import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Header } from './components/Header/Header'

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title='Hábitos'/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161927',
    flex: 1
  }
})

export default App;
