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
  const { control, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  })

  async function login(data: { username: string; password: string }){
    const result = await loginUser(data.username, data.password)
    console.log(result)
    if (result && result.username){
      navigation.navigate('HabitListScreen',  {userId: result._id})
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
        { (errors?.username?.type == 'required' || errors?.password?.type == 'required') && <Text style={styles.text}>Todos os campos são obrigatór                           ios</Text>}
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
    color: 'red',
    fontSize: 10,
    marginTop: 5
  }
})