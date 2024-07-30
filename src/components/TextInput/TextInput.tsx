import React, { useEffect, useState } from "react"
import { StyleSheet, TextInputProps as RNTextInputProps, TextInput as TextInputRN } from "react-native"

type TextInputProps = RNTextInputProps & {
  func?: (v: string) => void
}

export function TextInput(props: TextInputProps){
  
  return(
    <TextInputRN
      {...props}
      style={styles.input}
      placeholderTextColor='#969696a3'
      selectionColor='#222638'
      maxLength={30}
    />
  )
}

const styles = StyleSheet.create({
  input: {
      height: 50,
      width: '100%',
      borderRadius: 10,
      paddingVertical: 5,
      paddingStart: 10,
      backgroundColor: '#444c6e',
      fontSize: 15,
      marginTop: 10,
      color: '#dad9d9'
  }
})