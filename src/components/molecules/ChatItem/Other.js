import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { DummyDoctor9 } from '../../../assets';
import { colors, fonts } from '../../../utils'

const Other = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor9} style={styles.avatar}/>
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>Iya Bu, Boleh. Saran saya ibu minum oralit setiap siang hari.</Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    avatar:{
        height:30,
        width:30,
        borderRadius:30/2,
        marginRight:12
    },
    container:{
        flexDirection:'row',
        marginBottom:20,
        alignItems:'flex-end',
        paddingLeft:16
    },
    chatContent:{ 
        backgroundColor:colors.primary,
        padding:12,
        paddingRight:18,
        maxWidth:'90%',
        borderRadius:10,
        borderBottomLeftRadius:0
    },
    text:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.white
    },
    date:{
        fontSize:11,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:8
    }
})


