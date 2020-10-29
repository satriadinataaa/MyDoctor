import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { ILGetStarted } from '../../assets'
import { Button, Gap } from '../../components'

const index = () => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo/>
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" />
                <Gap height={16}/>
                <Button title="Sign In" type="secondary" />
            </View>
        </ImageBackground>
    )
}

export default index

const styles = StyleSheet.create({
    page :
        { padding:40,justifyContent:'space-between',backgroundColor:'white',flex:1},
    title:
        {fontSize:28,marginTop:91,color:'white',fontFamily:'Nunito-SemiBold'},
})
