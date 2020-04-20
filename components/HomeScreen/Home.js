import React, { useState, useMemo, useEffect } from 'react';
import { FlatList } from 'react-native';

import { ItemProduct } from '../ProductScreen/ItemProduct';
import { MenuIcon } from '../Share/IconComponent'
import { RightControls } from '../Share/RightControls';
import { DATA } from '../Data';

import {
  Layout, Select, Text, TopNavigation,
  TopNavigationAction, Divider
} from '@ui-kitten/components';
const AllProductsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(DATA)
  }, [])
  return (
    <Layout style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => <ItemProduct item={item} navigation={navigation} />}
      />
    </Layout >
  )

};
const OrdersScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(DATA)
  }, [])
  return (
    <Layout style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => <ItemProduct item={item} navigation={navigation} />}
      />
    </Layout >
  )
};
export const HomeScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState({ value: 0, text: 'Tất cả' });
  const data = useMemo(
    () => [
      { value: 0, text: 'Tất cả' },
      { value: 1, text: 'Category 1' },
      { value: 2, text: 'Category 2' }
    ],
    []
  );
  const Right = useMemo(() => <RightControls navigation={navigation} />, []);
  return (
    <Layout style={{ flex: 1 }}>
      <TopNavigation
        title='Sản phẩm'
        alignment='center'
        titleStyle={{ fontSize: 20 }}
        leftControl={<TopNavigationAction icon={MenuIcon} onPress={() => { navigation.openDrawer() }} />}
        rightControls={Right}
      />
      <Divider />
      <Select
        style={{ borderRadius: 10, margin: 10 }}
        data={data}
        selectedOption={selectedOption}
        onSelect={(option) => setSelectedOption(option)}
      />
      {selectedOption.value === 0 ? <AllProductsScreen navigation={navigation} />
        : selectedOption.value === 1 ? <OrdersScreen navigation={navigation} /> : <Text>2</Text>
      }
    </Layout>
  );
};
