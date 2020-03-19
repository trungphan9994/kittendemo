import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon, Layout, Text, Divider } from '@ui-kitten/components';
import { ProductsDetailsScreen } from './ProductsDetailsScreen'
import * as RootNavigation from './RootNavigation.js';
const { width, height } = Dimensions.get('window');
const NavigatorProductDetails = () => {
  RootNavigation.navigate(ProductsDetailsScreen)
}
export const ItemProduct = (item) => {

  const CustomHeader = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: "https://cdn.shop.prusa3d.com/1311-thickbox_default/original-prusa-i3-mk3-3d-printer.jpg" }}
      />
      <Layout style={{ justifyContent: 'flex-start', marginLeft: 8 }} >
        <Text
          category='h5'>
          IN 3D DSF
          </Text>
        <Text
          appearance='hint'
          category='s1'>
          Category
          </Text>
      </Layout>
    </React.Fragment>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F9FC' }}>
      <TouchableOpacity onPress={NavigatorProductDetails}>
      <Layout style={{ flex: 1, margin: 5, borderRadius: 4, borderWidth: 1, borderColor: '#EEF1F6' }}>
        <CustomHeader style={{ margin: 5 }}></CustomHeader>
        <Divider />
        <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 8 }}>
          <Text
            style={{ fontWeight: 'bold' }}
            category='s1'>
            590,000đ
          </Text>
          <Icon name='shopping-bag' fill='#12407D' width={32} height={32} onPress={() => alert('Add Cart')} />
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