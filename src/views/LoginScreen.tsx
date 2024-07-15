import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { TextInput } from "../components/TextInput/TextInput"
import { Button } from "../components/Button/Button"
import { Header } from "../components/Header/Header"
import { useUser } from "../controllers/useUser"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../routes/Routes"
import { useForm, Controller } from "react-hook-form"

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: LoginScreenProps) {

  const { loginUser } = useUser()
  const { control, handleSubmit, setError, formState: { errors }} = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  })

  async function login(data: { username: string; password: string }){
    const response = await loginUser(data.username, data.password)
    if (response?.username){
      navigation.navigate('HabitListScreen',  {userId: response._id})
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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange } }) => (
          <TextInput placeholder='Digite seu login' onChangeText={onChange} />
        )}
        name="username"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange } }) => (
          <TextInput placeholder='Digite sua senha' onChangeText={onChange} secureTextEntry />
        )}
        name="password"
      />
        { (errors?.username?.type == 'required' || errors?.password?.type == 'required') && <Text style={styles.text}>Todos os campos são obrigatórios</Text>}
        { errors?.root?.serverError?.type === 401 && <Text style={styles.text}>Senha incorreta.</Text>}
        { errors?.root?.serverError?.type === 404 && <Text style={styles.text}>O usuário informado não existe.</Text>}
        <View style={{marginTop: 20}}>
          <Button text='ENTRAR' background='#6676ce'height={50} onPress={handleSubmit(login)}/>
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
    fontSize: 10,
    marginTop: 5
  }
})