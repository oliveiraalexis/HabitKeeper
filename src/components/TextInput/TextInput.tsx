import React, { useState } from "react"
import { StyleSheet, TextInput as TextInputRN } from "react-native"

type TextInputProps = {
  onChange: () => void,
  content: string
}

export function TextInput({onChange, content}: TextInputProps){

  const [value, setValue] = useState()

  return(
    <TextInputRN
      style={styles.input}
      onChangeText={onChange}
      placeholder='Qual hábito você deseja criar?'
      placeholderTextColor='#dad9d9'
      selectionColor='#222638'
      maxLength={30}
      value={value}
      defaultValue={value}
    />
  )
}

const styles = StyleSheet.create({
  input: {
      height: 40,
      width: '100%',
      borderRadius: 10,
      paddingVertical: 5,
      paddingStart: 10,
      backgroundColor: '#444c6e',
      fontSize: 15,
      marginTop: 7,
      color: '#dad9d9'
  }
})