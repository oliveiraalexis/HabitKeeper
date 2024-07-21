import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { TextInput } from "../components/TextInput/TextInput"
import { Button } from "../components/Button/Button"
import { Header } from "../components/Header/Header"
import { useUser } from "../controllers/useUser"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../routes/Routes"
import { useForm, Controller } from "react-hook-form"

type RegistrationScreenProps = NativeStackScreenProps<RootStackParamList, 'RegistrationScreen'>;

export function RegistrationScreen({navigation}: RegistrationScreenProps) {

  const { createUser } = useUser()
  const { control, handleSubmit, setError, watch, formState: { errors }} = useForm({
    criteriaMode: 'all',
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
  })
  const password = watch('password');

  async function register (data: {name: string, email: string, password: string, passwordConfirmation: string}) {
    const response = await createUser({name: data.name, username: data.email, password: data.password})
    console.log(response)
    if(response?.status == 201){
      Alert.alert('Cadastro realizado!', 'Você será redirecionado para a tela de login.', 
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]
      )
    }

    if (response?.status > 200){
      setError('root.serverError', { 
        type: response.status,
      })
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="CADASTRO" hasBackButton onPress={() => navigation.goBack()} />
      <View style={styles.form}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <TextInput placeholder='Digite seu nome e sobrenome' onChangeText={onChange} />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <TextInput placeholder='Digite seu email' onChangeText={onChange} />
          )}
          name="email"
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
        <Controller
          control={control}
          rules={{
            required: true,
            validate: (value) => value === password
          }}
          render={({ field: { onChange } }) => (
            <TextInput placeholder='Confirme sua senha' onChangeText={onChange} secureTextEntry />
          )}
          name="passwordConfirmation"
        />
          {
            (
              errors?.name?.type == 'required' || 
              errors?.email?.type == 'required' ||
              errors?.password?.type == 'required' ||
              errors?.passwordConfirmation?.type == 'required'
            ) && <Text style={styles.text}>Todos os campos são obrigatórios</Text>
          }
        {errors?.passwordConfirmation?.type == 'validate' && <Text style={styles.text}>A senha e a confirmação da senha devem ser iguais</Text>}
        { errors?.root?.serverError?.type === 409 && <Text style={styles.text}>Já existe uma conta cadastrada com esse email</Text>}
        <View style={{marginTop: 20}}>
          <Button text='CADASTRAR' background='#6676ce'height={50} onPress={handleSubmit(register)}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161927',
    flex: 1,
    padding: 10
  },
  form: {
    margin: 20,
  },
  text: {
    color: '#990000',
    fontSize: 11,
    marginTop: 5
  }
})