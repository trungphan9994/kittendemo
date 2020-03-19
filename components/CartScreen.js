import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, FlatList, StatusBar } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Card, Button } from '@ui-kitten/components';
import { ItemCart } from './ItemCart'

const { height } = Dimensions.get('window');
const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);
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
export const CartScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle='light-content' backgroundColor='#000'/>
      <TopNavigation style={{ marginTop: 20 }} title='Giỏ hàng' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
      <Layout style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemCart item={item} />}
        />
      </Layout>
      <Divider />
      <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <Text
          style={styles.headerText}
          category='s1'>
          Thành tiền
        </Text>
        <Text category='h6' style={{ marginRight: 24, fontWeight: 'bold', color: '#D82828' }}>
          1.120.000 đ
          </Text>
      </Layout>
      <Button style={styles.button}>Tiến hành mua hàng</Button>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 4
  },
  headerImage: {
    resizeMode: 'cover',
    height: (height / 2) / 2
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