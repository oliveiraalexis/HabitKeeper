import { Alert, SafeAreaView, StyleSheet, View } from "react-native"
import { TextInput } from "../components/TextInput/TextInput"
import { Button } from "../components/Button/Button"
import { Header } from "../components/Header/Header"
import { useUser } from "../controllers/useUser"
import { useState } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../routes/Routes"

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: LoginScreenProps) {

  const { loginUser } = useUser()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login(){
    const result = await loginUser(username, password)
    if (result && result.username){
      navigation.navigate('HabitListScreen',  {userId: result._id})
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="HABIT KEEPER" isLoginScreen />
      <View>
        <TextInput placeholder='Digite seu login' func={setUsername}/>
        <TextInput placeholder='Digite sua senha' func={setPassword} secureTextEntry/>
        <View style={{marginTop: 20}}>
          <Button text='ENTRAR' background='#6676ce'height={50} onPress={login}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161927',
    flex: 1,
    padding: 30,
    justifyContent: 'space-evenly'
  }
})