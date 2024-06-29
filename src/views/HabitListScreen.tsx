import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, RefreshControl, Alert } from 'react-native'
import { Header } from '../components/Header/Header'
import { DatesTitle } from '../components/DatesTitle/DatesTitle'
import { CondensedHabit } from '../components/CondensedHabit/CondensedHabit'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { HabitForm } from '../components/HabitForm/HabitForm'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../routes/Routes'
import { useHabit } from '../controllers/useHabit'
import { useLast4Days } from '../hooks/useLast4Days'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Button } from '../components/Button/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HabitListScreenProps = NativeStackScreenProps<RootStackParamList, 'HabitListScreen'>;

export function HabitListScreen({navigation}: HabitListScreenProps){

  const last4Days = useLast4Days()
  const {userId, getHabits, deleteHabit} = useHabit()
  const bottomSheetRef = useRef<BottomSheet>(null)
  
  const [habits, setHabits] = useState([])
  const [habitToBeEdited, setHabitToBeEdited] = useState('')
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false)
  const [refreshing, setRefreshing] = React.useState(false)

  function toggleBottomSheet(habitId?: string){
    if (habitId && habitId != '') {
      setHabitToBeEdited(habitId)
    } else {
      setHabitToBeEdited('')
    }
    setIsBottomSheetVisible(prev => !prev)
  }

  async function searchHabits() {
    const arrayHabits = await getHabits(userId)
    setHabits(arrayHabits)
  }

  function onRefresh() {
    setRefreshing(true)
    searchHabits()
    setRefreshing(false)
  }

  async function delHabit(habitId: string){
    const status = await deleteHabit(habitId)
    if (status == 200) searchHabits()
  }

  useEffect(() => {
    searchHabits()
  }, [])

  return (
    <GestureHandlerRootView>
    <SafeAreaView style={styles.container}>
      <Header title='HÁBITOS' isDetailScreen={false} onPress={() => toggleBottomSheet()}/>
      {
        habits.length > 0 &&
        <DatesTitle last4Days={last4Days}/>
      }
        {
          habits.length > 0 &&
          <SwipeListView
          data={habits}
          renderItem={({item, index}) => (
            <CondensedHabit habit={item} key={index} last4Days={last4Days} searchHabits={searchHabits} onPress={() => navigation.navigate('HabitDetailScreen',  {habitId: item['_id']})}/>
          )}
          renderHiddenItem={ (data, rowMap) => (
            <View style={styles.swipe}>
                <Button icon={{name:"pencil", color:"#ffffff", size:20}} onPress={() => toggleBottomSheet(data.item['_id'])} />
                <Button 
                  icon={{name:"trash", color:"#ffffff", size:20}} 
                  onPress={
                    () => Alert.alert('Atenção', 'Deseja realmente excluir o hábito?', 
                      [
                        {
                          text: 'Cancelar',
                          onPress: () => {},
                          style: 'cancel',
                        },
                        {
                          text: 'OK',
                          onPress: () => delHabit(data.item['_id']),
                        },
                      ]
                    )
                  }
                />
            </View>
          )}
          rightOpenValue={-90}
          disableRightSwipe={true}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
          />
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
              <HabitForm habitToBeEdited={habitToBeEdited} toggleBottomSheet={toggleBottomSheet} getHabits={searchHabits}/>
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
  },
  swipe: {
    flexDirection: 'row',
    backgroundColor: '#444c6e',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 10,
    height: 70,
    marginTop: 10,
    paddingLeft: 10,
    paddingVertical: 10
  }
})
