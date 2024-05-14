import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../Button/Button'

export function Header({title}: { title: string; }): React.JSX.Element {

  return (
    <View style={styles.container}>
      <Button icon={{name:"settings-sharp", color:"#ffffff", size:20}}/>
      <Text style={styles.text}>{title}</Text>
      <Button icon={{name:"add", color:"#ffffff", size:25}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  text: {
    fontWeight: '900',
    fontSize: 18,
    color: '#ffffff'
  }
})