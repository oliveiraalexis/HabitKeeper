import React, {useEffect, useState} from 'react'
import { View, TextInput as TextInputRN, Text, StyleSheet } from 'react-native'
import { Button } from '../Button/Button'
import { useHabit, HabitProps } from '../../controllers/useHabit'

export function HabitForm ({userId, habitToBeEdited, toggleBottomSheet, getHabits}: {userId: string, habitToBeEdited: string, toggleBottomSheet: () => void, getHabits: () => void}){

    const {createHabit, getHabit, updateHabit} = useHabit()
    const [habit, setHabit] = useState<HabitProps>({
        _id: '',
        name: '',
        user_id: '',
        trackedDays: [],
        createdAt: '',
        __v: 0
    })
    const [habitName, setHabitName] = useState('');

    async function searchHabit(habitId: string) {
        const habit = await getHabit(userId, habitId)
        if (Object.keys(habit).length > 0) setHabit(habit)
    }

    useEffect(() => {
        if (habitToBeEdited != '') searchHabit(habitToBeEdited)
    },[])

    useEffect(() => {
        setHabitName(habit.name);
      }, [habit]);

    function completeAction() {
        if (habitToBeEdited){
            let newHabit = habit
            newHabit.name = habitName
            updateHabit(habit._id, newHabit)
        }else{
            createHabit(userId, habitName)
        }
        getHabits()
        toggleBottomSheet()
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                  <Button icon={{name:"close-sharp", color:"#ffffff", size:20}} text='Cancelar' padding={-5} height={30} onPress={toggleBottomSheet}/>
                  <Button icon={{name:"checkmark-sharp", color:"#ffffff", size:20}} text='Concluir' padding={0} height={30} 
                    onPress={() => completeAction()}/>
              </View>
            
            <View>
                <TextInputRN
                    style={styles.input}
                    onChangeText={setHabitName}
                    placeholder='Qual hábito você deseja criar?'
                    placeholderTextColor='#dad9d9'
                    selectionColor='#222638'
                    maxLength={30}
                    value={habitName}
                    defaultValue={habitName}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    input: {
        height: 40,
        width: '100%',
        borderRadius: 10,
        paddingVertical: 5,
        paddingStart: 10,
        backgroundColor: '#444c6e',
        fontSize: 15,
        marginTop: 7,
        color: '#dad9d9'
    },
    buttons:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
    }
})
