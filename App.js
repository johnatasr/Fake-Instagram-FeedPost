import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, createSwitchNavigator, createAppContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';

import Posts from './Pages/Main';
import Login from './Pages/Login'

const AppStack = createStackNavigator();

function NavStack() {
    return (
        <AppStack.Navigator screenOptions={{
                headerShown: false, 
            }}>
            <AppStack.Screen 
                name="Login"   
                component={Login} 
            />
            <AppStack.Screen 
                name="Post" 
                component={Posts}
            />
        </AppStack.Navigator>
    )
}


export default function App() {
    return(
        <NavigationContainer>
            <NavStack />          
        </NavigationContainer>
    );
}