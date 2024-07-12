import React, { useEffect, useState } from "react"
import { StyleSheet, TextInputProps as RNTextInputProps, TextInput as TextInputRN } from "react-native"

type TextInputProps = RNTextInputProps & {
  func?: (v: string) => void
}

export function TextInput(props: TextInputProps){

  const [value, setValue] = useState((props && props.value) ? props.value : '')

  useEffect(() => {
    if (props.func) props.func(value)
  },[value])

  return(
    <TextInputRN
      secureTextEntry={props.secureTextEntry}
      style={styles.input}
      onChangeText={setValue}
      placeholder={props.placeholder}
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