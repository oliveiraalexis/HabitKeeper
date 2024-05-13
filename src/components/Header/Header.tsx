import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export function Header(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <Icon name="settings-sharp" color="#ffffff" size={20}/>
      <Text>Hábitos</Text>
      <Icon name="add" color="#ffffff" size={20}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
})