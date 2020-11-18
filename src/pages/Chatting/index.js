import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = () => {
    return (
        <View style={styles.page}>
            <Header title="Zahra Salsabila" type="dark-profile"/>
            <Text style={styles.chatDate}>Rabu, 18 Nov 2020</Text>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <InputChat/>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    },
    chatDate:{
        fontSize:11,
        color:colors.text.secondary,
        fontFamily: fonts.primary.normal,
        marginVertical:20,
        textAlign:'center'
    }
})
