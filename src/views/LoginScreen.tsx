import { View } from "react-native"
import { TextInput } from "../components/TextInput/TextInput"

export function LoginScreen() {
  
  return (
    <View>
      <TextInput onChange={() => {}} content='username'/>
      <TextInput onChange={() => {}} content='password'/>
    </View>
  )
}