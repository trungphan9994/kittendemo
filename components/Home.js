import React,{useState,useRef} from 'react';
import { SafeAreaView, StatusBar, FlatList, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CartScreen } from './CartScreen';
import { ProfileScreen } from './ProfileScreen'
import { ItemProduct } from './ItemProduct';
import { ProductsDetailsScreen } from './ProductsDetailsScreen';
import Data from './Data';
import Modal from 'react-native-modalbox';
import {
  TabBar, Tab, Layout, Text, TopNavigation,
  TopNavigationAction, Icon
} from '@ui-kitten/components';
import * as RootNavigation from './RootNavigation.js';
const NavigatorCard = (refModalCartScreen) => {
  console.log(refModalCartScreen)
  refModalCartScreen.current && refModalCartScreen.current.open();
  //refModalCartScreen cais nafy o dau ra,k ton tai
  // refModalCartScreen.current.open();// loi cho bam nay nè lick
  // setModalVisible(true);
  // RootNavigation.navigate(CartScreen);
}
const MenuIcon = (style) => (
  <Icon {...style} name='menu-2' fill='#12407D' />
);

const SearchIcon = (style) => (
  <Icon {...style} name='search' fill='#12407D' />
);

const CartIcon = (style) => (
  <Icon {...style} name='shopping-bag' fill='#12407D' />
);

const SearchAction = (props) => (
  <TopNavigationAction {...props} icon={SearchIcon} />
);

const CartAction = (props) => (
  <TopNavigationAction {...props} icon={CartIcon} onPress={()=>NavigatorCard(props.refModalCartScreen)} />
);
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const AllProductsScreen = ({ navigation }) => (
  <Layout style={{ flex: 1 }}>
    <FlatList
      // columnWrapperStyle={{ justifyContent: 'space-between'}}
      data={Data.DATA}
      keyExtractor={item => item.id}
      numColumns={2}
      // horizontal={false}
      renderItem={({ item }) => <ItemProduct item={item} navigation={navigation} />}
    />
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1 }}>
    <FlatList
      // columnWrapperStyle={{ justifyContent: 'space-between'}}
      data={Data.DATA}
      keyExtractor={item => item.id}
      numColumns={2}
      // horizontal={false}
      renderItem={({ item }) => <ItemProduct item={item} />}
    />
  </Layout>
);
const OrdersScreen2 = () => (
  <Layout style={{ flex: 1 }}>
    <FlatList
      // columnWrapperStyle={{ justifyContent: 'space-between'}}
      data={Data.DATA}
      keyExtractor={item => item.id}
      numColumns={2}
      // horizontal={false}
      renderItem={({ item }) => <ItemProduct item={item} />}
    />
  </Layout>
);

const TopTabBar = ({ navigation, state }) => {

  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };
  return (
    <Layout>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TabBar selectedIndex={state.index} onSelect={onSelect}>
        <Tab title='Tất cả' />
        <Tab title='Category1' />
        <Tab title='Category2' />
      </TabBar>
    </Layout>
  );
}
const AllProductStackNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='AllProductsScreen' component={AllProductsScreen} />
    <Stack.Screen name='ProductsDetailsScreen' component={ProductsDetailsScreen} />
  </Stack.Navigator>
);
const TabNavigator = () => (
  <TopTab.Navigator tabBar={props => <TopTabBar {...props} />}>
    <TopTab.Screen name='StackNavigator' component={AllProductStackNavigator} />
    <TopTab.Screen name='Orders' component={OrdersScreen} />
    <TopTab.Screen name='Orders2' component={OrdersScreen2} />
  </TopTab.Navigator>
);
const renderRightControls = (refModalCartScreen) => [
  <SearchAction />,
  <CartAction refModalCartScreen={refModalCartScreen} />,
];
const renderModalCart = (refModalCartScreen) => {
  
  const BackIcon=(style )=>(<Icon {...style} name='arrow-back'/>);
  const DetailsCartScreen = () => {
    return (
      <CartScreen></CartScreen>
    );
  };
  return (
    <Modal ref={refModalCartScreen} animationType="slide" transparent={false}>
      <View style={{flex:1,marginTop:20}}>
        <TopNavigation
          title="Chi tiết sản phẩm"
          titleStyle={{fontWeight:'bold',fontSize:20}}
          alignment='center'
          leftControl={<TopNavigationAction icon={BackIcon} onPress={()=>refModalCartScreen.current.close()}/>}
        />
        <View style={{ flex:1}}>
          {DetailsCartScreen()}
        </View>
      </View>
    </Modal>
  );
};
export const HomeScreen = ({ navigation }) => {

  //chi ton tai trong cai nay
  // neu muon cai children nhan dc  thi phai truyen bien
  const refModalCartScreen = useRef();// ben nay may cai con no nam trong nay render ra ma nhan khong duoc ha ta
  return (
    <Layout style={{ flex: 1 }}>
      {renderModalCart(refModalCartScreen)}
      <TopNavigation
        style={{ marginTop: 20 }}
        title='Sản phẩm'
        alignment='center'
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        leftControl={<TopNavigationAction icon={MenuIcon} onPress={() => {navigation.openDrawer()}}/>}
        rightControls={renderRightControls(refModalCartScreen)}
        // rightControls={props => <renderRightControls {...props} />}
      />
      <TabNavigator />
    </Layout>
  );
};
