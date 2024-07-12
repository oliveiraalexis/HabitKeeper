import { SafeAreaView, StyleSheet, View } from "react-native"
import { TextInput } from "../components/TextInput/TextInput"
import { Button } from "../components/Button/Button"
import Icon from 'react-native-vector-icons/Ionicons'
import { Header } from "../components/Header/Header"

export function LoginScreen() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="HABIT KEEPER" isLoginScreen />
      <View>
        <TextInput placeholder='Digite seu login'/>
        <TextInput placeholder='Digite sua senha' secureTextEntry/>
        <View style={{marginTop: 20}}>
          <Button text='ENTRAR' background='#6676ce'height={50}/>
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