import React, {useState} from 'react'
import { View, TextInput as TextInputRN, Text, StyleSheet } from 'react-native'
import { Button } from '../Button/Button'
import { useHabit } from '../../controllers/useHabit'

export function HabitForm ({toggleBottomSheet, getHabits}: {toggleBottomSheet: () => void, getHabits: () => void}){

    const [listName, setListName] = useState('');
    const {userId, createHabit } = useHabit()

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                  <Button icon={{name:"close-sharp", color:"#ffffff", size:20}} text='Cancelar' padding={-5} height={30} onPress={toggleBottomSheet}/>
                  <Button icon={{name:"checkmark-sharp", color:"#ffffff", size:20}} text='Concluir' padding={0} height={30} 
                    onPress={() => {
                        createHabit(userId, listName)
                        getHabits()
                        toggleBottomSheet()
                    }}/>
              </View>
            
            <View>
                <TextInputRN
                    style={styles.input}
                    onChangeText={setListName}
                    placeholder='Qual hábito você deseja criar?'
                    placeholderTextColor='#dad9d9'
                    selectionColor='#222638'
                    maxLength={30}
                    value={listName}
                    defaultValue={listName}
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
