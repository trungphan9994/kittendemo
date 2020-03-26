import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, ScrollView, StatusBar } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Card, Button } from '@ui-kitten/components';
import * as RootNavigation from './RootNavigation.js';
const { width, height } = Dimensions.get('window');
const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const ProductsDetailsScreen = ({ navigation, route,item }) => {
  // const { item } = route.params;
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
            {/* {route.params.item.name} */}
          </Text>
          <Text
            style={styles.headerText}
            appearance='hint'
            category='s1'>
            {item.category}
          </Text>
        </Layout>
        <Text category='h5' style={{ marginRight: 20, fontWeight: 'bold' }}>
          {item.price}đ
        </Text>
      </Layout>
    </React.Fragment>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      {/* <TopNavigation style={{ marginTop: 20 }} title='Chi tiết' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} /> */}
      <Layout style={{ flex: 1 }}>
        <CustomHeader style={{ marginTop: 8, marginBottom: 8 }}></CustomHeader>
        <ScrollView style={styles.headerText}>
          <Text>
            {item.description}
            </Text>
        </ScrollView>
      </Layout>
      <Divider />
      <Button style={styles.button} onPress={()=>alert("Bạn muốn mua "+item.name+" với giá "+item.price+" VNĐ")}>Mua ngay</Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 4,
  },
  headerImage: {
    resizeMode: 'center',
    height: (height / 2) / 1.5,
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