import React from 'react';
import { useWindowDimensions,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from './SignInScreen';
import { HomeScreen } from './Home';
import { navigationRef } from './RootNavigation';
import { CartScreen } from './CartScreen';
import { ProfileScreen } from './ProfileScreen';
import { ProductsDetailsScreen } from './ProductsDetailsScreen';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  TabBar, Tab, Layout, Text, TopNavigation,
  TopNavigationAction, Icon, DrawerHeaderFooter,Button,Avatar
} from '@ui-kitten/components';
import Animated from 'react-native-reanimated';
import * as RootNavigation from './RootNavigation.js';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const ProfileIcon = (style) => (
  <Avatar size='medium' shape='round' 
  source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
  />
);
const LogoutIcon = (style) => (
  <Icon {...style} name='log-out' />
);
const LogoutButton = (style) => (
  <Button style={style} icon={LogoutIcon} size='small' onPress={ConfirmLogOut}/>
);
const CustomDrawerContent = ({ progress, ...rest }) => {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <DrawerHeaderFooter
          style={{ height:150}}
          title='John Doe'
          description='RN Developer'
          icon={ProfileIcon}
          accessory={LogoutButton}
        />
        <DrawerItemList {...rest} />
        <DrawerItem label="Logout" onPress={ConfirmLogOut} />
      </Animated.View>
    </DrawerContentScrollView>
  );
}
const ConfirmLogOut=()=>{
  Alert.alert(
    'LogOut',
    'Bạn muốn đăng xuất?',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => RootNavigation.navigate(SignInScreen)},
    ],
    { cancelable: false }
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} drawerType={useWindowDimensions().width > 900 ? 'permanent' : 'front'}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);
const HomeNavigator = () => (
  <Stack.Navigator headerMode='none' initialRouteName='SignInScreen'>
    <Stack.Screen name='SignInScreen' component={SignInScreen} />
    <Stack.Screen name='HomeScreen' component={DrawerNavigator} />
    <Stack.Screen name='CartScreen' component={CartScreen} />
    <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    <Stack.Screen name='ProductsDetailsScreen' component={ProductsDetailsScreen} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <HomeNavigator />
  </NavigationContainer>
);