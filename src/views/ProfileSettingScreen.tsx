import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { TextInput } from "../components/TextInput/TextInput"
import { Button } from "../components/Button/Button"
import { Header } from "../components/Header/Header"
import { UserProps, useUser } from "../controllers/useUser"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../routes/Routes"
import { useForm, Controller } from "react-hook-form"
import { useEffect, useState } from "react"
import { remove, storageKey} from "../services/Storage"

type ProfileSettingScreenProps = NativeStackScreenProps<RootStackParamList, 'ProfileSettingScreen'>;

export function ProfileSettingScreen({route, navigation}: ProfileSettingScreenProps) {

  const { getUser, updateUser, deleteUser, loginUser } = useUser()
  const {userId} = route.params
  const [user, setUser] = useState<UserProps>({
    name: '',
    username: '',
    password: ''
  })
  const { control, handleSubmit, setError, watch, formState: { errors }} = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      newPassword: ""
    },
  })
  const password = watch('password')

  useEffect(() => {
    searchUser()
  },[])

  async function searchUser() {
    const user = await getUser(userId)
    setUser(user)
  }

  async function profileUpdate (data: {name: string, email: string, password: string, newPassword: string}) {

    const response = await updateUser(userId, 
      {
        name: user.name, 
        username: user.username, 
        password: data.password
      }
    )

    if(response?.status == 200){
      Alert.alert('Senha alterada!', 'Você será redirecionado para a tela inicial.', 
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
        type: response?.status,
      })
    }
  }

  async function deleteAccount() {
    Alert.alert('Atenção', 'Deseja realmente excluir esta conta?', 
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const response = await deleteUser(userId)
            if(response == 200){
              navigation.replace('LoginScreen')
            }
          },
        },
      ]
    )
  }

  async function logout() {
    Alert.alert('Atenção', 'Deseja sair da conta? Você será redirecionado para a tela de login e precisará logar novamente.', 
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            remove(storageKey)
            navigation.replace('LoginScreen')
          }
        },
      ]
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="ALTERAR SENHA" hasBackButton onPress={() => navigation.goBack()} />
      <View style={styles.form}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <TextInput placeholder='Digite a nova senha' onChangeText={onChange} secureTextEntry />
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{
            required: true,
            validate: value => value == password
          }}
          render={({ field: { onChange } }) => (
            <TextInput placeholder='Confirme a nova senha' onChangeText={onChange} secureTextEntry />
          )}
          name="newPassword"
        />
          {
            (
              errors?.password?.type == 'required' || 
              errors?.newPassword?.type == 'required'
            ) && <Text style={styles.text}>Todos os campos são obrigatórios</Text>
          }
          { errors?.newPassword?.type == 'validate' && <Text style={styles.text}>A confirmação da senha está diferente da nova senha</Text>}
        <View style={{marginTop: 20}}>
          <Button text='SALVAR' background='#6676ce'height={50} onPress={handleSubmit(profileUpdate)}/>
        </View>
        <View style={{marginTop: 10}}>
          <Button text='SAIR DA CONTA' background='#6676ce'height={50} onPress={logout}/>
        </View>
        <View style={{marginTop: 10}}>
          <Button text='EXCLUIR CONTA' background='#c73f3f'height={50} onPress={deleteAccount}/>
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