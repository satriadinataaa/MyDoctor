import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input,Link, Loading } from '../../components'
import { colors, fonts, storeData, useForm } from '../../utils'
import { Firebase } from '../../config'
import { showMessage } from 'react-native-flash-message'
const SignIn = ({navigation}) => {
    const [form,setForm] = useForm({email:'',password:''})
    const [loading, setloading] = useState(false)
    const login = () =>{
        console.log('form',form);
        setloading(true);
        Firebase.auth().signInWithEmailAndPassword(form.email,form.password).then(res=>{
            console.log('success',res);
            setloading(false);
            Firebase.database().ref(`users/${res.user.uid}/`).once('value').then(resDB =>{
                console.log('data user:' , resDB.val());
                if(resDB.val()){
                    storeData('user',resDB.val())
                    navigation.replace('MainApp');

                }
            })
        })
        .catch(err=>{
            console.log('error',err)
            setloading(false);
            showMessage({
                message:err.message,
                type:'default',
                backgroundColor:colors.error,
                color:colors.white,
                autoHide:false,
                
            })
        });

    }
    return (
        <>
        <View style={styles.page}>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={40}/>
                <ILLogo/>
                <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
                <Input label="Email Address" value={form.email} onChangeText={(value)=> setForm('email',value) }/>
                <Gap height={24}/>
                <Input label="Password" value={form.password} onChangeText={(value)=> setForm('password',value) } secureTextEntry/>
                <Gap height={10}/>
                <Link title="Forgot My Password" size={12} />
                <Gap height={40}/>
                <Button title="Sign In" onPress={login} />
                <Gap height={30}/>
                <Link title="Create New Account" size={16} align="center" onPress={()=>navigation.navigate('Register')}  />
            </ScrollView>
            
        </View>
        {
            loading && <Loading/>
        }
        </>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page:
        {paddingHorizontal:40,backgroundColor:colors.white,flex:1},
    title:
        {fontSize:20,fontFamily:fonts.primary[600], color:colors.text.primary,marginTop:40,marginBottom:40,maxWidth:153}
})
