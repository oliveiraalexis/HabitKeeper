import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

type CheckButtonProps = {
  isCheckedDay: boolean
}

export function CheckButton({isCheckedDay}: CheckButtonProps){
  const iconColor = isCheckedDay ? '#6676ce' : '#888888'
  const iconName = isCheckedDay ? 'checkmark-circle-sharp' : 'close-circle-outline'

  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={iconName} color={iconColor} size={26}/>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4.7,
    borderRadius: 8
  }
})