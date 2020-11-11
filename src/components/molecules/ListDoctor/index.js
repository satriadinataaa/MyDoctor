import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor2 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor2} style={styles.avatar}/> 
            <View>
            <Text style={styles.name}>Alexander Jenie</Text>
            <Text style={styles.chat}>Baik Bu, kalau ada waktu mau ngopi bareng?</Text>
            </View>
           
        </View>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",padding:16,borderBottomWidth:1,borderBottomColor:colors.border,alignItems:"center"
    },
    avatar:{
        width:46,
        height:46,
        borderRadius:46/2,marginRight:12
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
