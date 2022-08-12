import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const MainNavigator = () => (
    <Navigator>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Details' component={DetailsScreen} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <MainNavigator />
    </NavigationContainer>
);