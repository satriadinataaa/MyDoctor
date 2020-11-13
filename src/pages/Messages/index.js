import React , {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2,DummyDoctor3 } from '../../assets'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = () => {
    const [doctors] = useState([
        {
            id:1,
            profile: DummyDoctor1,
            name:"Alexander Jannie",
            desc:"Iya, terima kasih kembali bu"
        },
        {
            id:2,
            profile: DummyDoctor2,
            name:"Marco Polo",
            desc:"Goxils bu xixixixi"
        },
        {
            id:3,
            profile: DummyDoctor3,
            name:"Sebastian",
            desc:"Permisi Bu, Saya izin ke WC sebentar"
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messsages</Text>
                {
                    doctors.map(doctor => {
                        return <ListDoctor profile={doctor.profile} name={doctor.name} desc={doctor.desc} key={doctor.id}/>
                    })
                }
                
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
  page:{
      backgroundColor:colors.secondary,flex:1
  },
  content:{
      backgroundColor:colors.white,flex:1,borderBottomLeftRadius:20,borderBottomRightRadius:20
  },
  title:{
      fontSize:20,fontFamily:fonts.primary[600],color:colors.text.primary,marginTop:30,marginLeft:16
  },
  
})
