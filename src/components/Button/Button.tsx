import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

type buttonProps = TouchableOpacityProps & {
    icon?: {
        name: string,
        color: string,
        size: number
    },
    text?: string,
    padding?: number,
    height?: number,
    width?: number,
    goBack: () => void
}

export function Button({icon, text, padding = 10, height, width, disabled = false, goBack}: buttonProps){

    const buttonHeight = (height) ? {height: height} : {}
    const buttonWidth = (width) ? {width: width} : {}
    const buttonOpacity = disabled ? 0.3 : 1

    return (
        <TouchableOpacity disabled={disabled} style={{...styles.container, ...buttonWidth, ...buttonHeight, padding: padding, opacity: buttonOpacity}} onPress={goBack}>
            {icon && <Icon name={icon.name} color={icon.color} size={icon.size}/>}
            {text && <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 8
    },
    text: {
        marginLeft: 5,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    }
})