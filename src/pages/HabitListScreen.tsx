import React, { useRef } from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import { Header } from '../components/Header/Header'
import { DatesTitle } from '../components/DatesTitle/DatesTitle'
import { CondensedHabit } from '../components/CondensedHabit/CondensedHabit'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { Button } from '../components/Button/Button'
import { TextInput } from '../components/TextInput/TextInput'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../App'

export function HabitListScreen(){

  const bottomSheetRef = useRef<BottomSheet>(null)
  const navigation = useNavigation<StackTypes>()

  return (
    <GestureHandlerRootView>
    <SafeAreaView style={styles.container}>
      <Header title='HÁBITOS' isDetailScreen={false}/>
      <DatesTitle/>
      <CondensedHabit habit={{title: 'Ler 5 páginas por dia', last4Days: [false, true, true, true]}} onPress={() => navigation.navigate('HabitDetailScreen')}/>
      <Text style={styles.text}>Você ainda não criou nenhum hábito. Toque no botão “+” acima para adicionar um novo hábito.</Text>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        onChange={() => {}}
        backgroundStyle={{backgroundColor: '#3a4161'}}
        enableDynamicSizing={true}
      >
        <BottomSheetScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.buttons}>
                <Button icon={{name:"close-sharp", color:"#ffffff", size:20}} text='Cancelar' padding={-5} height={30} goBack={() => {}}/>
                <Button icon={{name:"checkmark-sharp", color:"#ffffff", size:20}} text='Concluir' padding={0} height={30} goBack={() => {}}/>
            </View>
            <TextInput/>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161927',
    flex: 1,
    padding: 10
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 30
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingVertical: 30,
    paddingHorizontal: 15
  }
})
