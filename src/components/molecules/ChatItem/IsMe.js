import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils'

const IsMe = () => {
    return (
        <View style={styles.container}>
        <View style={styles.chatContent}>
            <Text style={styles.text}>Halo Dok, Apakah mabok jeruk itu buruk?</Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
    </View>
    )
}

export default IsMe
const styles = StyleSheet.create({
    container:{
        
        marginBottom:20,
        alignItems:'flex-end',
        paddingRight:16
    },
    chatContent:{ 
        backgroundColor:colors.cardLight,
        padding:12,
        paddingRight:18,
        maxWidth:'70%',
        borderRadius:10,
        borderBottomRightRadius:0
    },
    text:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    date:{
        fontSize:11,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:8
    }
})

