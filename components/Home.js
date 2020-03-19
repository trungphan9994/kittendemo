import React from 'react';
import { SafeAreaView, StatusBar, FlatList, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CartScreen } from './CartScreen';
import { ProfileScreen } from './ProfileScreen'
import { ItemProduct } from './ItemProduct';

import {
  TabBar, Tab, Layout, Text, TopNavigation,
  TopNavigationAction, Icon
} from '@ui-kitten/components';
import * as RootNavigation from './RootNavigation.js';
const NavigatorCard = () => {
  RootNavigation.navigate(CartScreen);
}
const NavigatorProfile = () => {
  RootNavigation.navigate(ProfileScreen)
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

const MenuAction = (props) => (
  <TopNavigationAction {...props} icon={MenuIcon} onPress={NavigatorProfile} />
);

const SearchAction = (props) => (
  <TopNavigationAction {...props} icon={SearchIcon}/>
);

const CartAction = (props) => (
  <TopNavigationAction {...props} icon={CartIcon} onPress={NavigatorCard} />
);
const TopTab = createMaterialTopTabNavigator();
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    url: 'https://cdn.shopify.com/s/files/1/0046/3781/8929/products/ender-3-pro_1_1200x1200.jpg?v=1576807334',
    name:'IN 3D',
    category:'Category',
    description:'Quis odio ut velit iaculis. Felis odio pellentesque vitae ultrices fringilla enim varius blandit. Fermentum, urna ultrices tempus, feugiat urna, diam integer. Sagittis a bibendum libero ut dolor cursus pulvinar nec. Nec vel interdum mi etiam arcu. Neque, mattis turpis urna, commodo nulla. Amet diam volutpat elementum gravida cursus proin nunc feugiat nulla. Neque, aenean consectetur vel massa sem vitae risus id. Etiam tempor velit sit non facilisi. Nibh non malesuada sed at nulla. Diam molestie posuere egestas nulla.',
    price:'120,000'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    url: 'https://lh3.googleusercontent.com/cWya94a6c4wHBHh-cRL7j0-ZyKojkayvlgVw6YJYvkzYnXgHHb2woDLAT7nEuYLQ7Ua3SJS7RxCYlYqiJ1JcfYS8=w640-h480-p-rw',
    name:'Curabitur',
    category:'Category',
    description:'Quis odio ut velit iaculis. Felis odio pellentesque vitae ultrices',
    price:'1,120,000'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    url: 'https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/12/goods_img_big-v2/20190312155536_69237.jpg',
    name:'Ridiculus id',
    category:'Category',
    description:'Quis odio ut velit iaculis. Felis odio pellentesque vitae ultrices fringilla enim varius blandit.',
    price:'10,000,000'
  },
  {
    id: '58694a0d-3da1-471f-bd96-145571e29d72',
    url: 'https://cdn.shop.prusa3d.com/1311-thickbox_default/original-prusa-i3-mk3-3d-printer.jpg',
    name:'IN 3D DSF',
    category:'Category',
    description:'Quis odio ut velit iaculis. Dultrices fringilla enim varius blandit.',
    price:'590,000'
  }
];
const UsersScreen = () => (
  <Layout style={{ flex: 1 }}>
    <FlatList
      // columnWrapperStyle={{ justifyContent: 'space-between'}}
      data={DATA}
      keyExtractor={item => item.id}
      numColumns={2}
      // horizontal={false}
      renderItem={({ item }) => <ItemProduct item={item} />}
    />
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);
const OrdersScreen2 = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS2</Text>
  </Layout>
);

const TopTabBar = ({ navigation, state }) => {

  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };
  return (
    <Layout>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TopNavigation
        style={{ marginTop: 20 }}
        title='Sản phẩm'
        alignment='center'
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        leftControl={renderLeftControl()}
        rightControls={renderRightControls()}
      />
      <TabBar selectedIndex={state.index} onSelect={onSelect}>
        <Tab title='Tất cả' />
        <Tab title='Category1' />
        <Tab title='Category2' />
      </TabBar>
    </Layout>
  );
}
const TabNavigator = () => (
  <TopTab.Navigator tabBar={props => <TopTabBar {...props} />}>
    <TopTab.Screen name='Users' component={UsersScreen} />
    <TopTab.Screen name='Orders' component={OrdersScreen} />
    <TopTab.Screen name='Orders2' component={OrdersScreen2} />
  </TopTab.Navigator>
);
const renderLeftControl = () => (
  <MenuAction />
);

const renderRightControls = () => [
  <SearchAction />,
  <CartAction />,
];

export const HomeScreen = ({ navigation }) => {
  return (
    <TabNavigator />
  );
};