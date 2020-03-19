import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from './SignInScreen';
import { HomeScreen } from './Home';
import { navigationRef } from './RootNavigation';
import {CartScreen} from './CartScreen';
import {ProfileScreen} from './ProfileScreen';
import {ProductsDetailsScreen} from './ProductsDetailsScreen'
const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='SignInScreen' component={SignInScreen}/>
    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    <Stack.Screen name='CartScreen' component={CartScreen}/>
    <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
    <Stack.Screen name='ProductsDetailsScreen' component={ProductsDetailsScreen}/>
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <HomeNavigator/>
  </NavigationContainer>
);