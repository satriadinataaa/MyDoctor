import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'

const Splash = () => {
    return (
        <View style={styles.page}>
        <ILLogo/>
        <Text style={styles.text}>
           My Doctor
        </Text>
      </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page:
        { flex:1, alignItems:'center', justifyContent:'center' },
    text:
        { fontSize:20,fontFamily:'Nunito-SemiBold',color:'#112340',marginTop:20}
})
