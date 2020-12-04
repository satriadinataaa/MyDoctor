import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser, IconRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({name,desc}) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image source={DummyUser} style={styles.avatar}/>
                <IconRemovePhoto style={styles.removephoto}/>
            </View>
            {
                name && (
                    <View>
                         <Text style={styles.name}>{name} </Text>
                        <Text style={styles.profession}>{desc}</Text>
                    </View>
                )
            }
           
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        
    },
    avatar:{
        width:110,
        height:110,
        borderRadius:110/2
    },
    borderProfile:{
        height:130,
        width:130,
        borderRadius:130/2,
        borderWidth:1,
        borderColor:colors.border,      
        justifyContent : 'center',
        alignItems: 'center'
    },
    name:{
        fontSize:20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop:12
    },
    profession:{
        fontFamily:fonts.primary[600],
        fontSize:16,
        color:colors.text.secondary,
        marginTop:2
    },
    removephoto:{
        position:'absolute',
        right:8,
        bottom:8
    }
});
