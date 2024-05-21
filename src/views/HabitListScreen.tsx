import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import { Header } from '../components/Header/Header'
import { DatesTitle } from '../components/DatesTitle/DatesTitle'
import { CondensedHabit } from '../components/CondensedHabit/CondensedHabit'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { HabitForm } from '../components/HabitForm/HabitForm'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../App'
import { useHabit } from '../controllers/useHabit'
import { useLast4Days } from '../hooks/useLast4Days'

export function HabitListScreen(){

  const [habits, setHabits] = useState([])
  const last4Days = useLast4Days()
  const {userId, getHabits} = useHabit()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const navigation = useNavigation<StackTypes>()
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false)

  function toggleBottomSheet(){
    setIsBottomSheetVisible(prev => !prev)
  }

  async function searchHabits() {
    const arrayHabits = await getHabits(userId)
    setHabits(arrayHabits)
  }

  useEffect(() => {
    searchHabits()
  }, [])

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
              <HabitForm toggleBottomSheet={toggleBottomSheet} getHabits={searchHabits}/>
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
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingVertical: 30,
    paddingHorizontal: 15
  }
})
