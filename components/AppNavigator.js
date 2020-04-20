import React from 'react';
import { useWindowDimensions, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen/Home';
import { CartScreen } from './CartScreen/CartScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import { ProductsDetailsScreen } from './ProductScreen/ProductsDetailsScreen';
import SignInUpScreen from './SignScreen/SignInUpScreen';
import OrderManagementScreen from './OrderManagement/OrderManagement.js';
import SignInScreen from './SignScreen/SignInScreen';
import SignUpScreen from './SignScreen/SignUpScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen/ForgetPassword';
import CheckoutScreen from './CheckoutScreen/CheckoutScreen';
import AddressScreen from './AddressScreen/AddressScreen';
import SplashScreen from './SplashScreen/SplashScreen';
import NotificationScreen from './NotificationScreen/NotificationScreen';
import OrderTrackScreen from './OrderTrackScreen/OrderTrackScreen';
import IntroScreen from './IntroAppScreen/IntroScreen';
import DetailOrder from './OrderManagement/DetailOrder/DetailOrder';
import ChatScreen from './ChatScreen/ChatScreen';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Divider, Tab, Layout, Text, TopNavigation,
  TopNavigationAction, Icon, DrawerHeaderFooter, Button, Avatar
} from '@ui-kitten/components';
import Animated from 'react-native-reanimated';
import CustomDrawerContent from './CustomDrawerContent'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const StackHome = createStackNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    // initialRouteName="SplashScreen" headerMode='none' 
    drawerContent={props => <CustomDrawerContent {...props} />}
  >
    {/* <Drawer.Screen name='SplashScreen' component={SplashScreen} /> */}
    <Drawer.Screen name='Home' component={HomeNavigator} />
  </Drawer.Navigator>
);
const HomeNavigator = () => (
  <Stack.Navigator headerMode='none' initialRouteName='HomeScreen'>
    <Stack.Screen name='HomeScreen' component={HomeScreen} />
    <Stack.Screen name='SignInUpScreen' component={SignInUpScreen} />
    <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    <Stack.Screen name='ProductsDetailsScreen' component={ProductsDetailsScreen} />
    <Stack.Screen name='CartScreen' component={CartScreen} />
    <Stack.Screen name='OrderManagementScreen' component={OrderManagementScreen} />
    <Stack.Screen name='SignInScreen' component={SignInScreen} />
    <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
    <Stack.Screen name='ForgetPasswordScreen' component={ForgetPasswordScreen} />
    <Stack.Screen name='CheckoutScreen' component={CheckoutScreen} />
    <Stack.Screen name='AddressScreen' component={AddressScreen} />
    <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
    <Stack.Screen name='OrderTrackScreen' component={OrderTrackScreen} />
    <Stack.Screen name='ChatScreen' component={ChatScreen} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer >
    {/* <DrawerNavigator /> */}
    <StackHome.Navigator initialRouteName="SplashScreen" headerMode='none'>
      <StackHome.Screen name="SplashScreen" component={SplashScreen} />
      <StackHome.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name='OrderManagementScreen' component={OrderManagementScreen} />
      <Stack.Screen name='IntroScreen' component={IntroScreen} />
      <Stack.Screen name='DetailOrder' component={DetailOrder} />
      <Stack.Screen name='OrderTrackScreen' component={OrderTrackScreen} />
      <Stack.Screen name='ChatScreen' component={ChatScreen} />
    </StackHome.Navigator>
  </NavigationContainer>
);