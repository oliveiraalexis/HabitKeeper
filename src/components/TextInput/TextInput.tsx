import React, { useEffect, useState } from "react"
import { StyleSheet, TextInput as TextInputRN } from "react-native"

type TextInputProps = {
  onChange?: () => void,
  content?: string
  placeholder?: string
}

export function TextInput({onChange, content = '', placeholder}: TextInputProps){

  const [value, setValue] = useState(content)

  useEffect(() => {
    if (onChange) onChange()
  },[value])

  return(
    <TextInputRN
      style={styles.input}
      onChangeText={setValue}
      placeholder={placeholder}
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
      marginTop: 10,
      color: '#dad9d9'
  }
})