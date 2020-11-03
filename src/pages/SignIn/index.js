import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input,Link } from '../../components'
import { colors } from '../../utils'
const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ILLogo/>
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address"/>
            <Gap height={24}/>
            <Input label="Password"/>
            <Gap height={10}/>
            <Link title="Forgot My Password" size={12} />
            <Gap height={40}/>
            <Button title="Sign In" onPress={() => navigation.replace('MainApp')}/>
            <Gap height={30}/>
            <Link title="Create New Account" size={16} align="center" />
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page:
        {padding:40,backgroundColor:colors.white,flex:1},
    title:
        {fontSize:20,fontFamily:"Nunito-SemiBold", color:colors.text.primary,marginTop:40,marginBottom:40,maxWidth:153}
})
