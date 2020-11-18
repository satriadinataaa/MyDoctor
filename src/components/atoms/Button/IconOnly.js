import React from 'react'
import { StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconBackDark, IconBackLight } from '../../../assets'

const IconOnly = ({onPress,icon}) => {
    const Icon = () =>{
        if(icon === 'back-dark'){
            return <IconBackDark/>
        }
        if(icon === 'back-light'){
            return <IconBackLight/>
        }
        return <IconBackDark/>
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
