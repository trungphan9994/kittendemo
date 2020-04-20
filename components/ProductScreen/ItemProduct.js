import React,{ useState,useContext }from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon, Layout, Text, Divider} from '@ui-kitten/components';
import {format_number} from '../FormatNumber'
import GlobalContext from "../../context/global";
const { width, height } = Dimensions.get('window');
const buttonConnectSize = (height / 10) * 1;
export const ItemProduct = ({item,navigation}) => {
  const NavigatorProductDetails = () => {
    navigation.navigate("ProductsDetailsScreen", {
      item: item
    })
  }
  const {addCartItem} = useContext(GlobalContext)
  const CustomHeader = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: item.url }}
      />
      <Layout style={{ justifyContent: 'flex-start', marginLeft: 8 }} >
        <Text
          category='h5'>
          {item.name}
          </Text>
        <Text
          style={{ fontWeight: 'bold',fontSize: 14 }}
          category='h5'>
          {format_number(item.price)} đ
          </Text>
      </Layout>
    </React.Fragment>
  );
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F9FC' }}>
      <TouchableOpacity 
      onPress={NavigatorProductDetails}
      >
      <Layout style={{ flex: 1, margin: 5, borderRadius: 4, borderWidth: 1, borderColor: '#EEF1F6' }}>
        <CustomHeader style={{ margin: 5}}></CustomHeader>
        <Divider style={{ margin: 10,marginTop:10 }}/>
        <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 5 }}>
          <Icon name='heart-outline' fill='#1654B4' width={32} height={32} onPress={() => alert("Thêm yêu thích")} />
          <Icon name='shopping-cart' fill='#1654B4' width={32} height={32} onPress={() => addCartItem(item,false)} />
        </Layout>
      </Layout>
      </TouchableOpacity>
    </SafeAreaView >
    
  );
};
const styles = StyleSheet.create({
  headerImage: {
    resizeMode: 'cover',
    height: (height / 2) / 2,
  },
});