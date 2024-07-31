import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { TextInput } from "../components/TextInput/TextInput"
import { Button } from "../components/Button/Button"
import { Header } from "../components/Header/Header"
import { useUser } from "../controllers/useUser"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../routes/Routes"
import { useForm } from "react-hook-form"
import { search, storageKey, StoredToken} from "../services/Storage"
import { useEffect, useState } from "react"

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({navigation}: LoginScreenProps) {

  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loginUser, isTokenExpired } = useUser()
  const { handleSubmit, setError, formState: { errors }} = useForm()
  
  useEffect(() => {
    if(!isTokenExpired()){
      const token: StoredToken | null = search(storageKey) as StoredToken | null
      if (token?.userId) navigation.navigate('HabitListScreen',  {userId: token?.userId})
    }
  },[])

  async function login(){
    const response = await loginUser(username, password)
    if (response?.user?.username){
      navigation.navigate('HabitListScreen',  {userId: response.user._id})
    }
    
    if (response?.status > 200){
      setError('root.serverError', { 
        type: response.status,
      })
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="HABIT KEEPER" isLoginScreen />
      <View>
        <TextInput placeholder='Digite seu login' onChangeText={setUsername} />
        <TextInput placeholder='Digite sua senha' onChangeText={setPassword} secureTextEntry />
        { errors?.root?.serverError?.type === 401 && <Text style={styles.text}>Senha incorreta.</Text>}
        { errors?.root?.serverError?.type === 404 && <Text style={styles.text}>O usuário informado não existe.</Text>}
        <View style={{marginTop: 20}}>
          <Button text='ENTRAR' background='#6676ce'height={50} onPress={handleSubmit(login)} disabled={username && password ? false : true} />
        </View>
        <View style={{marginTop: 10}}>
          <Button text='CADASTRAR' background='#313855'height={50} onPress={() => navigation.navigate('RegistrationScreen')} />
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
  },
  text: {
    color: '#990000',
    fontSize: 11,
    marginTop: 5
  }
})