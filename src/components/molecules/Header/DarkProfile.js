import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor9 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = () => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-light"/>
            <View style={styles.content}>
                <Text style={styles.name}>Zahra Salsabila</Text>
                <Text style={styles.desc}>Dokter Anak</Text>
            </View>
            <Image source={DummyDoctor9} style={styles.avatar}/>
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        paddingVertical:30,
        paddingLeft:20,
        paddingRight:16,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        flexDirection:'row' 
    },
    content:{
        flex:1,
        alignItems:'center'
    },
    avatar:{
        height:46,
        width:46,
        borderRadius:46/2
    },
    name:{
        fontSize:20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign:'center'
    },
    desc:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        marginTop:6,
        textAlign:'center',
        color:colors.text.subTitle
    }
})
