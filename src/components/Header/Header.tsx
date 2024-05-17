import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../Button/Button'

type HeaderProp = {
  title: string, 
  isDetailScreen: boolean
}

export function Header({title, isDetailScreen}: HeaderProp): React.JSX.Element {
  
  const headerAlignment = isDetailScreen ? 'flex-start' : 'space-between'
 
  return (
    <View style={{...styles.container, justifyContent: headerAlignment}}>
      {!isDetailScreen && <Button icon={{name:"settings-sharp", color:"#ffffff", size:20}}/>}
      {isDetailScreen && <Button icon={{name:"chevron-back", color:"#ffffff", size:25}}/>}
      <Text style={styles.text}>{title}</Text>
      {!isDetailScreen && <Button icon={{name:"add", color:"#ffffff", size:25}}/>}
    </View>
  )
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  text: {
    fontWeight: '900',
    fontSize: 18,
    color: '#ffffff',
    marginHorizontal: 15
  }
})