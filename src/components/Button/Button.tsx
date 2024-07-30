import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native'

type buttonProps = TouchableOpacityProps & {
    icon?: {
        name: string,
        color: string,
        size: number
    },
    text?: string,
    padding?: number,
    height?: number,
    background?: string
    onPress?: () => void
}

export function Button({icon, text, padding = 10, height, disabled = false, background, onPress}: buttonProps){

    const buttonHeight = (height) ? {height: height} : {}
    const buttonOpacity = disabled ? 0.3 : 1
    const buttonMarginLeft = (icon && text) ? 5 : 0

    return (
        <TouchableOpacity disabled={disabled} style={{...styles.container, ...buttonHeight, padding: padding, opacity: buttonOpacity, backgroundColor: background}} onPress={onPress}>
            {icon && <Icon name={icon.name} color={icon.color} size={icon.size}/>}
            {text && <Text style={{...styles.text, marginLeft: buttonMarginLeft}}>{text}</Text>}
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    }
})