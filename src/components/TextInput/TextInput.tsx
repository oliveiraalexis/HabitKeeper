import React, {useState} from 'react'
import { View, TextInput as TextInputRN, Text, StyleSheet } from 'react-native'

export function TextInput (){

    const [listName, setListName] = useState();

    return (
        <View style={styles.container}>
            
            <View>
                <Text style={styles.text}>Hábito:</Text>
                <TextInputRN
                    style={styles.input}
                    onChangeText={() => null}
                    // value={''}
                    // defaultValue={''}
                    maxLength={48}
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
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
        height: 40,
        width: '100%',
        borderRadius: 10,
        paddingVertical: 5,
        paddingStart: 10,
        backgroundColor: '#D9D9D9',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7
    }
})
