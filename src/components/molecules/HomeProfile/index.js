import React,{useState,useEffect} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { DummyUser, ILNullPhoto } from '../../../assets'
import { colors, fonts,getData } from '../../../utils'

const index = ({onPress}) => {
    const [profile, setProfile] = useState({
        photo : ILNullPhoto,
        fullName: '',
        profession:'',
    })
    useEffect(() => {
        getData('user').then(res => {
            console.log('data user:' , res);
            const data = res;
            data.photo = {uri: res.photo};
            setProfile(data);
        })
    }, []);
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar }/>
            <View>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default index

const styles = StyleSheet.create({
    container:  {
        flexDirection:'row'
    },
    avatar:{
        width:46,
        height:46,
        borderRadius:46/2,
        marginRight:12
    },
    name:{
        fontSize:16,fontFamily:fonts.primary[600],color:colors.text.primary,textTransform:'capitalize'
    },
    profession:{
        fontSize:12,fontFamily:fonts.primary[400],color:colors.text.secondary,extTransform:'capitalize'
    }
})
