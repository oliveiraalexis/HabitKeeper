import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../Button/Button'

type HeaderProp = {
  title: string, 
  isDetailScreen: boolean,
  goBack?: () => void
}

export function Header({title, isDetailScreen, goBack = () => {}}: HeaderProp): React.JSX.Element {
  
  return (
    <View>
      {!isDetailScreen && 
        <View style={styles.ListContainer}>
          <Button icon={{name:"settings-sharp", color:"#ffffff", size:20}} goBack={goBack} disabled={true}/>
          <Text style={styles.text}>{title}</Text>
          <Button icon={{name:"add", color:"#ffffff", size:25}} goBack={goBack}/>
        </View>
      }
      
      {isDetailScreen && 
        <View style={styles.detailContainer}>
          <Button icon={{name:"chevron-back", color:"#ffffff", size:25}} goBack={goBack}/>
          <View style={styles.detailTitle}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
      }
    </View>
  )
}

let styles = StyleSheet.create({
  ListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff'
  },
  detailTitle: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40
  }
})