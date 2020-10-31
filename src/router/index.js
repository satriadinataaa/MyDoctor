import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { GetStarted, Register, SignIn, Splash } from '../pages';
const Stack = createStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Router;
