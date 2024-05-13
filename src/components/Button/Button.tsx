import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

type buttonProps = {
    icon?: {
        name: string,
        color: string,
        size: number
    },
    text?: string
}

export function Button({icon, text}: buttonProps){

    return (
        <TouchableOpacity style={styles.container}>
            {icon && <Icon name={icon.name} color={icon.color} size={icon.size}/>}
            {text && <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8
    },
    text: {
        marginLeft: 10
    }
})