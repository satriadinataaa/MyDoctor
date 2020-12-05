import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, Profile, ProfileItem } from '../../components'
const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" onPress={()=>navigation.goBack()}/>
            <Profile name="Alexa Rachel" desc="Pediatrician"/>
            <Gap height={10}/>
            <ProfileItem label="Alumnus" value="Universitas Indonesia"/>
            <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum"/>
            <ProfileItem label="No . STR" value="09021281621041"/>
            <View style={styles.action}>
                <Button title="Start Consultation" onPress={()=>navigation.navigate('Chatting')}/>
            </View>
            
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1
    },
    action:{
        paddingHorizontal:40,
        paddingTop:23
    }
})
