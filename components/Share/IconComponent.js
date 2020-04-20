import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@ui-kitten/components';
import GlobalContext from "../../context/global"
export const IconSecure = ({ secureTextEntry, ...props }) => {
  return <Icon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'} />;
};
export const LogoutIcon = (style) => <Icon {...style} name="log-out" />;
export const PlusCircleIcon = (style) => <Icon {...style} name="plus-circle-outline" fill="#1654B4" />;
export const MenuIcon = (style) => (
  <Icon {...style} name="menu-2" fill="#12407D" />
);
export const BellIcon = (style) => (
  <Icon {...style} name='bell-outline' fill="#1654B4" />
)
export const SearchIcon = (style) => (
  <Icon {...style} name="search" fill="#1654B4" />
);

export const CartIcon = (props) => {
  const {cartList}=useContext(GlobalContext)
  return (
    // <Icon {...style} name="shopping-cart-outline" fill="#1654B4" />
    <View>
      <Icon {...props} name="shopping-cart-outline" fill='#1654B4' />
      {cartList.length > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {cartList.length}
          </Text>
        </View>
      )}
    </View>
  )
}
export const CartIconFill = (style) => (
  <Icon {...style} name="shopping-cart" fill="#1654B4" />
);
export const BackIcon = (style) => <Icon {...style} name="arrow-back" />;

export const DeleteIcon = (style) => <Icon {...style} name="close" />;