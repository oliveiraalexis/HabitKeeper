import React, { useRef } from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
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
      <CondensedHabit habit={{title: 'Primeiro hábito para teste', last4Days: [false, true, true, true]}} onPress={() => navigation.navigate('HabitDetailScreen')}/>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        onChange={() => {}}
        backgroundStyle={{backgroundColor: '#253153'}}
        enableDynamicSizing={true}
      >
        <BottomSheetScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.buttons}>
                <Button icon={{name:'close-sharp', color:'#f81010', size:25}} goBack={() => {}}/>
                <Button icon={{name:'checkmark-sharp', color:'#0dd175', size:25}} goBack={() => {}}/>
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
}
})
