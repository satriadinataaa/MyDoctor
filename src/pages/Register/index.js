import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { Firebase } from '../../config'
import { colors,useForm,storeData    } from '../../utils'
import { showMessage, hideMessage } from "react-native-flash-message";

const Register = ({navigation}) => {
    //const [fullName, setFullName] = useState('');
    //const [profession, setProfession] = useState('');
    //const [email, setEmail] = useState('');
    //const [password,setPassword] = useState('');
    const [loading, setloading] = useState(false)
    const [form, setForm] = useForm({
        fullName:'',
        profession:'',
        email:'',
        password:'',
    });

    const onContinue = () =>{
      
        console.log(form);
      
      
    setloading(true);
        Firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
           
            
           setloading(false);
           setForm('reset');
           
           console.log(form);
            const data = {
                fullName: form.fullName,
                profession: form.profession,
                email: form.email,
                uid: success.user.uid,
            };
           
            storeData('user',data);
            Firebase.database().ref('users/'+success.user.uid+'/').set(data);
            navigation.navigate('UploadPhoto',data);
            console.log('register sukses : ',success);
           
           
        })
        .catch((error) => {
            const errorCode = error.code;
            setloading(false);
            const errorMessage = error.message;
            showMessage({
                message: error.message,
                backgroundColor: colors.error,
                color: colors.white
              });
        }); 
        
    }
    return (
        <>
        <View style={styles.page}>
            <Header onPress={()=>navigation.goBack() } title="Daftar Akun"/>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}> 
                    <Input label="Full Name" value={form.fullName} onChangeText={(value) => setForm('fullName',value)}/>
                    <Gap height={24}/>
                    <Input label="Pekerjaan" value={form.profession} onChangeText={(value) => setForm('profession',value)}/>
                    <Gap height={24}/>
                    <Input label="Email" value={form.email} onChangeText={(value) => setForm('email',value)}/>
                    <Gap height={24}/>
                    <Input label="Password" value={form.password} onChangeText={(value) => setForm('password',value)} secureTextEntry={true}/>
                    <Gap height={40}/>
                    <Button title="Continue" onPress={onContinue}/>
                </ScrollView>
               
            </View>
        </View>
        {
            loading && <Loading/>
        }
        
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    content:
        {padding:40,paddingTop:0},  
    page:
        {backgroundColor:colors.white,flex:1 }
})
