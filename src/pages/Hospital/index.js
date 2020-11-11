import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILHospitalBG } from '../../assets'
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

const Hospital = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.jumlah}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
            <ListHospital/>
            <ListHospital/>
            <ListHospital/>
            </View>
        </View>
    )
}

export default Hospital

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.secondary,flex:1
    },
    content:{
        backgroundColor:colors.white,
        flex:1,
       borderRadius:20,
       marginTop:-30,
       paddingTop:14
    },  
    background:{
        height:240,paddingTop:30
    },
    title:{
        fontSize:20,fontFamily:fonts.primary[600],color:colors.white,textAlign:'center'
    },
    jumlah:{
        fontSize:14,fontFamily:fonts.primary[300],color:colors.white,marginTop:6,textAlign:'center'
    }
})
