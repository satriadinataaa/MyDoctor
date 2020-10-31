import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils'

const Input = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>   
            <TextInput style={styles.input}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input:
        {borderRadius:10,borderWidth:1,borderColor:colors.border,padding:12},
    label:
        {fontSize:16,color:colors.text.secondary,fontFamily:"Nunito-Regular",marginBottom:6}
})
