import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, List, Profile } from '../../components'

const UserProfile = ({navigation}) => {
    return (
        <View>
            <Header title="Profile"  onPress={()=>navigation.goBack() } />
            <Profile/>
            <Text>User UserProfile</Text>
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="" />
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="" />
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="" />
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="" />
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({})
