import React, {useState} from 'react'
import { View, TextInput as TextInputRN, Text, StyleSheet } from 'react-native'

export function TextInput (){

    const [listName, setListName] = useState();

    return (
        <View style={styles.container}>
            
            <View>
                <TextInputRN
                    style={styles.input}
                    onChangeText={() => null}
                    placeholder='Qual hábito você deseja criar?'
                    placeholderTextColor='#dad9d9'
                    selectionColor='#222638'
                    maxLength={30}
                    // value={''}
                    // defaultValue={''}
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
    }
})
