import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'

const Doctor = () => {
    return (
        <View style={styles.page}>
            <HomeProfile/>
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <Text>Top Rated Doctor</Text>
            <RatedDoctor/> 
            <RatedDoctor/> 
            <RatedDoctor/> 
            <Text>Good News</Text>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page:{
        paddingVertical:30,paddingHorizontal:16
    },
    welcome:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color: colors.text.primary,
        marginTop:30,
        marginBottom:16,
        maxWidth:209
    }
})
