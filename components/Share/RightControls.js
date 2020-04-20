import React from 'react';
import { TopNavigationAction } from '@ui-kitten/components';
import { CartIcon, SearchIcon, CartIconFill, BellIcon } from '../Share/IconComponent';
const navigatorCard = (navigation) => {
    navigation.navigate('CartScreen')
};
const navigatorNotification = (navigation) => {
    navigation.navigate('NotificationScreen')
};
const SearchAction = (props) => (
    <TopNavigationAction {...props} icon={SearchIcon} />
);
const BellAction = (props) => (
    <TopNavigationAction {...props} icon={BellIcon} 
    onPress={() => navigatorNotification(props.navigation)}
    />
)
const RenderCartIcon = (props) => (<CartIcon {...props} />)
const CartAction = (props) => (
    <TopNavigationAction
        {...props}
        icon={RenderCartIcon}
        onPress={() => navigatorCard(props.navigation)}
    />
);
const CartFillAction = (props) => (
    <TopNavigationAction
        {...props}
        icon={CartIconFill}
        onPress={() => navigatorCard()}
    />
);
export const RightControls = ({ navigation }) => (
    <>
        <BellAction navigation={navigation} />
        <SearchAction />
        <CartAction navigation={navigation} />
    </>
)
export const CartControls = ({ navigation }) => (
    <>
        <CartAction navigation={navigation} />
    </>
)
export const CartFillControls = () => (
    <>
        <CartFillAction />
    </>
)

