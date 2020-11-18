import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Zahra" />
            <Button title="send" type="btn-icon" /> 
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container:{
        padding:16  
    },
    input:{
        backgroundColor:colors.disable,
        padding: 14,
        borderRadius:10
    }
})
