import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { ILGetStarted } from '../../assets'
import { Button, Gap } from '../../components'
import { colors } from '../../utils'

const index = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo/>
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={()=> navigation.navigate('Register')} />
                <Gap height={16}/>
                <Button title="Sign In" type="secondary" onPress={()=> navigation.navigate('SignIn')} />
            </View>
        </ImageBackground>
    )
}

export default index

const styles = StyleSheet.create({
    page :
        { padding:40,justifyContent:'space-between',backgroundColor:colors.white,flex:1},
    title:
        {fontSize:28,marginTop:91,color:colors.white,fontFamily:'Nunito-SemiBold'},
})
