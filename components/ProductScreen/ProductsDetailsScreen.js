import React,{useMemo,useContext} from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, ScrollView, StatusBar } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Card, Button } from '@ui-kitten/components';
import { CartControls } from '../Share/RightControls';
import {format_number} from '../FormatNumber'
import GlobalContext from "../../context/global";


const { width, height } = Dimensions.get('window');

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const ProductsDetailsScreen = ({ navigation, route }) => {
  const {addCartItem} = useContext(GlobalContext)
  const { item } = route.params;
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const CustomHeader = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: item.url }}
      />
      <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Layout style={{ justifyContent: 'flex-start' }} >
          <Text
            style={styles.headerText}
            category='h5'>
            {item.name}
          </Text>
          <Text
            style={styles.headerText}
            appearance='hint'
            category='s1'>
            {item.category}
          </Text>
        </Layout>
        <Text category='h5' style={{ marginRight: 20, fontWeight: 'bold' }}>
          {format_number(item.price)}đ
        </Text>
      </Layout>
    </React.Fragment>
  );
  const Right = useMemo(() => <CartControls navigation={navigation}  />, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TopNavigation title='Chi tiết' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()}
        rightControls={Right}
      />
      <Divider />
      <Layout style={{ flex: 1 }}>
        <CustomHeader style={{ marginTop: 8, marginBottom: 8 }}></CustomHeader>
        <ScrollView style={styles.headerText}>
          <Text>
            {item.description}
          </Text>
        </ScrollView>
      </Layout>
      <Divider />
      <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          style={[styles.buttonAddProduct, styles.colorButton]}
          onPress={() => addCartItem(item,false)}>Thêm vào giỏ hàng</Button>
        <Button
          style={[styles.button, styles.buttonBuy]}
          onPress={() => {
            addCartItem(item,true)
            navigation.navigate('CartScreen')
          }}>Mua ngay</Button>
      </Layout>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 4,
  },
  headerImage: {
    // resizeMode: 'center',
    resizeMode: 'cover',
    height: (height / 2) / 1.5,
  },
  button: {
    borderRadius: 8,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 14,
    marginBottom: 14
  },

  buttonAddProduct: {
    backgroundColor: '#D82828',
    borderRadius: 8,
    // borderColor: '#D82828',
    marginLeft: 24,
    marginTop: 14,
    marginBottom: 14
  },
  colorButton: {
    backgroundColor: '#1654B4'
  },
  buttonBuy: {
    flex: 1,
    backgroundColor: '#D82828',
    borderRadius: 8,
    borderColor: '#D82828',
    marginLeft: 10,
    marginRight: 24,
    marginTop: 14,
    marginBottom: 14
  }
});