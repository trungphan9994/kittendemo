import React, { useCallback, useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, FlatList, StatusBar, Alert } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Card, Button } from '@ui-kitten/components';
import  ItemCart  from './ItemCart'
import GlobalContext from '../../context/global';
import { format_number } from '../FormatNumber';
const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);


export const CartScreen = ({ navigation }) => {
  const { cartList, removeCartItem, changeCartItem,isAuth } = useContext(GlobalContext);
  useEffect(() => {
    totalPrice();
  }, [cartList])
  console.log("isAuth",isAuth)
  const [total, setTotal] = useState(0);
  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const BackAction = useCallback(
    () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
    [navigateBack]
  );
  const totalPrice = useCallback(() => {
    setTotal(cartList.reduce((tong, Product) => {
      tong += Product.price
      return tong
    }, 0))
  }, [cartList])
  const MoveCheckout = useCallback(() => {
    if (cartList.length > 0) {
      if(isAuth){
        navigation.navigate('CheckoutScreen', { total: total })
      }
      else{
        navigation.navigate('SignInUpScreen',{isFromCartScreen:true})
      }
    }
    else {
      Alert.alert('Chưa có sản phẩm nào')
    }
  }, [total,isAuth,cartList])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <TopNavigation title='Giỏ hàng' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
      <Layout style={styles.Layout}>
        <FlatList
          data={cartList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemCart item={item} removeCartItem={removeCartItem} changeCartItem={changeCartItem} />}
        />
      </Layout>
      <Divider />
      <Layout style={styles.Layout1}>
        <Text style={styles.headerText} category="s1">
          Thành tiền
        </Text>
        <Text category="h6" style={styles.priceText}>
          {format_number(total)} đ
        </Text>
      </Layout>
      <Button style={styles.button} onPress={() => MoveCheckout()}>Tiến hành mua hàng</Button>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: 'white' },
  Layout: { flex: 1 },
  Layout1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },
  headerText: {
    marginHorizontal: 24,
    marginVertical: 4
  },
  priceText: {
    marginRight: 24,
    fontWeight: 'bold',
    color: '#D82828'
  },
  button: {
    backgroundColor: '#D82828',
    borderRadius: 8,
    borderColor: '#D82828',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 14,
    marginBottom: 14
  }
});