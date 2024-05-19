import React, { useRef, useState } from 'react'
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
import { useHabit } from '../controllers/useHabit'

export function getLast4Days() {
  const currentDay = new Date()
  return [
    currentDay.getTime() - currentDay.getTimezoneOffset()*60000,
    currentDay.setDate(currentDay.getDate() - 1) - currentDay.getTimezoneOffset()*60000,
    currentDay.setDate(currentDay.getDate() - 1) - currentDay.getTimezoneOffset()*60000,
    currentDay.setDate(currentDay.getDate() - 1) - currentDay.getTimezoneOffset()*60000,
  ]
}

export function HabitListScreen(){

  const last4Days = getLast4Days()
  const {habits} = useHabit()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const navigation = useNavigation<StackTypes>()
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false)

  function toggleBottomSheet(){
    setIsBottomSheetVisible(prev => !prev)
  }

  return (
    <GestureHandlerRootView>
    <SafeAreaView style={styles.container}>
      <Header title='HÁBITOS' isDetailScreen={false} onPress={toggleBottomSheet}/>
      {
        habits.length > 0 &&
        <DatesTitle last4Days={last4Days}/>
      }
      {
        habits.length > 0 &&
        habits.map((habit, key) => (
          <CondensedHabit habit={habit} last4Days={last4Days} key={key} onPress={() => navigation.navigate('HabitDetailScreen')}/>
        ))
      }
      {
        habits.length == 0 &&
        <Text style={styles.text}>
          Você ainda não criou nenhum hábito. Toque no botão “+” acima para adicionar um novo hábito.
        </Text>
      }
      {
        isBottomSheetVisible &&
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
                  <Button icon={{name:"close-sharp", color:"#ffffff", size:20}} text='Cancelar' padding={-5} height={30} onPress={toggleBottomSheet}/>
                  <Button icon={{name:"checkmark-sharp", color:"#ffffff", size:20}} text='Concluir' padding={0} height={30} onPress={() => {}}/>
              </View>
              <TextInput/>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      }
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
