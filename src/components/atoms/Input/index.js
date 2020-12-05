import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils'

const Input = ({label,value,onChangeText,secureTextEntry}) => {
    const [border,setBorder] = useState(colors.border)
    const onFocusForm = () => {
            setBorder(colors.tertiary); 
    }
    const onBlurForm = () => {
        setBorder(colors.border);
    }
    return (
       
        <View>
            <Text style={styles.label}>{label}</Text>   
            <TextInput onFocus={onFocusForm} onBlur={onBlurForm} style={styles.input(border)} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input:(border)=>(
        {borderRadius:10,borderWidth:1,borderColor:border,padding:12}),
    label:
        {fontSize:16,color:colors.text.secondary,fontFamily:"Nunito-Regular",marginBottom:6}
})
