import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Loading = () => {
    return (
        <View style={styles.wrapper}> 
            <ActivityIndicator size="large" color={colors.primary}/>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper:{
        position: 'absolute',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.loadingBackground   ,
        width:'100%',
        height:'100%'
    },
    text:{
        fontSize:18,
        color:colors.primary,
        fontFamily:fonts.primary[600],
        marginTop:16
    }
})
