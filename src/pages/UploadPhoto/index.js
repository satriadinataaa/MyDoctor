
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button,Gap,Header, Link } from '../../components'
import { colors, fonts } from '../../utils'
import ImagePicker from 'react-native-image-picker';
import { showMessage, hideMessage } from "react-native-flash-message";
const UploadPhoto = ({navigation}) => {
    const [hasPhoto, sethasPhoto] = useState(false);
    const [photo, setPhoto] = useState(ILNullPhoto);
    const getImage = () => {
        ImagePicker.launchImageLibrary({}, (response) => {
            // Same code as in above section!
            console.log('response : ',response);
            if(response.didCancel || response.error ){
                showMessage({
                    message: "Oops sepertinya anda tidak jadi memilih foto",
                    backgroundColor: colors.error,
                    color: colors.white
                  });
            }
            else{
            const source = {uri : response.uri};
            setPhoto(source);
            sethasPhoto(true);
            }
          });
    }
    return (
        <View style={styles.page}>
              <Header onPress={()=>navigation.goBack() } title="Upload Photo"/>
              <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar}/>
                        {
                            hasPhoto && <IconRemovePhoto style={styles.addPhoto}/>
                        }
                        {
                            !hasPhoto && <IconAddPhoto style={styles.addPhoto}/>
                        }
                        
                        
                    </TouchableOpacity>
                    <Text style={styles.name}>Satriadinata</Text>
                    <Text style={styles.profession}>Product Designer</Text>
                </View>
                <View>
                    <Button disable={!hasPhoto} title="Upload and Continue" onPress={()=>navigation.replace('MainApp')}/>
                    <Gap height={30}/>
                    <Link title="Skip for this" align="center" size={16} onPress={()=>navigation.replace('MainApp')}/>
                </View>
            </View>
              
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white
    },
    profile:{
        alignItems:'center',flex:1,justifyContent:'center'
    },
    content:{
        paddingHorizontal:40,flex:1,justifyContent:'space-between',paddingBottom:64
    },
    avatar:{
        height:110,
        width:110,
        borderRadius:110/2
    },
    avatarWrapper:{
        width:130,
        height:130,
        borderWidth:1,
        borderColor:colors.border,
        borderRadius:130/2,
        alignItems: 'center',
        justifyContent :'center'
    },
    addPhoto:{
        position:'absolute',
        bottom:8,
        right:6
    },
    name:{
        fontSize:24,
        color:colors.text.primary,
        fontFamily:fonts.primary[600],
        textAlign:'center'
    },
    profession:{
        fontSize:18,
        fontFamily: fonts.primary.normal,
        textAlign:'center',
        color:colors.text.secondary,
    }
})
