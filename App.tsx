import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, SelectJob } from 'pages';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="SelectJob" component={SelectJob} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
