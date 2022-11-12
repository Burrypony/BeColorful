import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import RegForm from './app/components/regForm'
import LogIn from './app/components/logInForm'

const Stack = createStackNavigator()
    
const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={LogIn} options={{headerShown: false}}/>
                <Stack.Screen name='SignUp' component={RegForm} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>      
    )
}

export default Navigation