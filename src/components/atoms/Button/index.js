import React from 'react'
import { StyleSheet, Text ,View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../utils'
import ButtonIconSend from './ButtonIconSend'
import IconOnly from './IconOnly'

const Button =  ({type,title,onPress,icon,disable }) => {
    if(type === 'btn-icon-send'){
        return(
            <ButtonIconSend disable={disable}/>
        )
    }
    if(type === 'icon-only'){
        return(
            <IconOnly icon={icon} onPress={onPress}/>
        )
    }
    if(disable){
        return(
        <View style={styles.disabledBg} >
            <Text style={styles.textdisabled}>{title}</Text>
        </View>
        )
    }
    return (      
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) =>({
        backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical:10,
        borderRadius:10
    }),
    text: (type)=>({
        fontSize:18,
        fontFamily:'Nunito-SemiBold',
        textAlign:'center',
        color: type=== 'secondary' ? colors.button.secondary.text : colors.button.primary.text
    }),
    disabledBg: {
        paddingVertical:10,
        borderRadius:10,
        backgroundColor : colors.button.disabled.background
    },
    textdisabled:{
        fontSize:18,
        fontFamily:'Nunito-SemiBold',
        textAlign:'center',
        color: colors.button.disabled.text
    }
})
