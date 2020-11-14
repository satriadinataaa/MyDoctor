import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1 } from '../../assets'
import { Header, ListDoctor } from '../../components'

const ChooseDoctor = ({navigation}) => {
    return (
        <View>
            <Header title="Pilih Dokter Anak"  onPress={()=>navigation.goBack() } />
            <ListDoctor profile={DummyDoctor1} name="Alexander Janie" desc="Wanita"/>
            <ListDoctor profile={DummyDoctor1} name="Alexander Janie" desc="Wanita"/>
            <ListDoctor profile={DummyDoctor1} name="Alexander Janie" desc="Wanita"/>
            <ListDoctor profile={DummyDoctor1} name="Alexander Janie" desc="Wanita"/>
            <ListDoctor profile={DummyDoctor1} name="Alexander Janie" desc="Wanita"/>
           
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({})
