import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'

import { colors, fonts } from '../../../utils'

const List = ({profile,name,desc,type,onPress,icon}) => {
    const Icon = () => {
        if(icon === 'edit-profile'){
            return <IconEditProfile/>
        }
        if(icon === 'language'){
            return <IconLanguage/>
        }
        if(icon ==='rate'){
            return <IconRate/>
        }
        if(icon === 'help'){
            return <IconHelp/>
        }
        return <IconEditProfile/> 
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {icon ? <Icon/> :   <Image source={profile} style={styles.avatar}/> }
               
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.chat}>{desc}</Text>
            </View>
            {
                type === 'next' && <IconNext/>
            }
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",padding:16,borderBottomWidth:1,borderBottomColor:colors.border,alignItems:"center",justifyContent:'space-between'
    },
    content:{
        flex:1,marginLeft:16
    },
    avatar:{
        width:46,
        height:46,
        borderRadius:46/2
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    chat:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary
    }

})
