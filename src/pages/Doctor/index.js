import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts, getData } from '../../utils'
import {DummyDoctor1, DummyDoctor2, DummyDoctor3, JSONCategoryDoctor} from '../../assets';
import { useEffect } from 'react'
const Doctor = ({navigation}) => {
    
  

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                   <View style={styles.wrapperSection}>
                        <Gap height={30}/>
                        <HomeProfile onPress={()=> navigation.navigate('UserProfile')}/>
                        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                   </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={32}/>
                                {
                                    JSONCategoryDoctor.data.map(item => {
                                        return <DoctorCategory category={item.category} key={item.id} onPress={()=> navigation.navigate('ChooseDoctor')}/>
                                    })
                                }
                               
                                <Gap width={22}/>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
                        <RatedDoctor name="Alexa Rachel" desc="Pediatrician" avatar={DummyDoctor1} onPress={()=> navigation.navigate('DoctorProfile')}/> 
                        <RatedDoctor name="Satriadinata" desc="Dokter Dota" avatar={DummyDoctor2} onPress={()=> navigation.navigate('DoctorProfile')}/> 
                        <RatedDoctor name="Zahra Salsabila" desc="Dokter Bocah" avatar={DummyDoctor3} onPress={()=> navigation.navigate('DoctorProfile')}/> 
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <Gap height={30}/>
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page:{
       backgroundColor:colors.secondary,flex:1
    },
    content:{
        backgroundColor:colors.white,flex:1, borderBottomLeftRadius:20,borderBottomRightRadius:20
    },
    wrapperSection:{
        paddingHorizontal:16
    },
    welcome:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color: colors.text.primary,
        marginTop:30,
        marginBottom:16,
        maxWidth:209
    },
    category:{
        flexDirection:'row'
    },
    wrapperScroll:{
        marginHorizontal:-16
    },
    sectionLabel:{
        fontSize:16, fontFamily:fonts.primary[600],color:colors.text.primary,marginTop:30,marginBottom:16
    }
})
