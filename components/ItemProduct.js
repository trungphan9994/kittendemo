import React,{ useState }from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity,Modal,View } from 'react-native';
import { Icon, Layout, Text, Divider,TopNavigation,TopNavigationAction } from '@ui-kitten/components';
import { ProductsDetailsScreen } from './ProductsDetailsScreen'
import * as RootNavigation from './RootNavigation.js';
const { width, height } = Dimensions.get('window');
const buttonConnectSize = (height / 10) * 1;
export const ItemProduct = ({item,navigation}) => {
  const [modalVisible,setModalVisible] = React.useState(false)
  // const NavigatorProductDetails = () => {
  //   navigation.navigate("ProductsDetailsScreen", {
  //     item: item
  //   })
  // }
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
          appearance='hint'
          category='s1'>
          {item.category}
          </Text>
      </Layout>
    </React.Fragment>
  );
  const renderModalItem = (item) => {
    const BackIcon=(style )=>(<Icon {...style} name='arrow-back'/>);
    const BackAction=()=>{
      <TopNavigationAction icon={BackIcon} onPress={()=>setModalVisible(false)}/>
    }
		const DetailsProduct = (item) => {
			return (
				<ProductsDetailsScreen item={item}></ProductsDetailsScreen>
			);
		};
		return (
			<Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={{flex:1}}>
					<TopNavigation
            title="Chi tiết sản phẩm"
            titleStyle={{fontWeight:'bold',fontSize:20}}
            alignment='center'
            leftControl={<TopNavigationAction icon={BackIcon} onPress={()=>setModalVisible(false)}/>}
          />
					<View style={{ flex:1}}>
						{DetailsProduct(item)}
					</View>
				</View>
			</Modal>
		);
	};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F9FC' }}>
      <TouchableOpacity 
      // onPress={NavigatorProductDetails}
      onPress={()=>setModalVisible(true)}
      >
      {renderModalItem(item)}
      <Layout style={{ flex: 1, margin: 5, borderRadius: 4, borderWidth: 1, borderColor: '#EEF1F6' }}>
        <CustomHeader style={{ margin: 5 }}></CustomHeader>
        <Divider />
        <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 8 }}>
          <Text
            style={{ fontWeight: 'bold' }}
            category='s1'>
            {item.price}đ
          </Text>
          <Icon name='shopping-bag' fill='#12407D' width={32} height={32} onPress={() => setModalVisible(true)} />
        </Layout>
      </Layout>
      </TouchableOpacity>
    </SafeAreaView >
    
  );
};
const styles = StyleSheet.create({
  headerImage: {
    resizeMode: 'center',
    height: (height / 2) / 2,
  },
});