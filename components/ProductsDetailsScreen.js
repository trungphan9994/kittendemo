import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, ScrollView,StatusBar } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Card, Button } from '@ui-kitten/components';
const { width, height } = Dimensions.get('window');
const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const ProductsDetailsScreen = ({ navigation }) => {

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
        source={{ uri: 'https://cdn.shop.prusa3d.com/1311-thickbox_default/original-prusa-i3-mk3-3d-printer.jpg' }}
      />
      <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Layout style={{ justifyContent: 'flex-start' }} >
          <Text
            style={styles.headerText}
            category='h5'>
            IN 3D DSF
          </Text>
          <Text
            style={styles.headerText}
            appearance='hint'
            category='s1'>
            Category
          </Text>
        </Layout>
        <Text category='h5' style={{ marginRight: 20,fontWeight: 'bold'}}>
        590,000đ
        </Text>
      </Layout>
    </React.Fragment>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle ="light-content" backgroundColor="#000"/>
      <TopNavigation style ={{marginTop:20}} title='Chi tiết' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
      <Layout style={{ flex: 1 }}>
        <CustomHeader style={{marginTop:8,marginBottom:8}}></CustomHeader>
        <ScrollView style={styles.headerText}>
            <Text>
              Quis odio ut velit iaculis. 
              Felis odio pellentesque vitae ultrices fringilla enim varius blandit. 
              Fermentum, urna ultrices tempus, feugiat urna, diam integer. 
              Sagittis a bibendum libero ut dolor cursus pulvinar nec. 
              Nec vel interdum mi etiam arcu. Neque, mattis turpis urna, commodo nulla. 
              Amet diam volutpat elementum gravida cursus proin nunc feugiat nulla. 
              Neque, aenean consectetur vel massa sem vitae risus id. Etiam tempor velit sit non facilisi.
              Nibh non malesuada sed at nulla. Diam molestie posuere egestas nulla. 
              Nisi, varius tincidunt neque amet, cursus nunc eu, eget magnis. 
              Pharetra, cursus eu tortor nulla sit. Tellus condimentum urna dictum non aliquet id posuere varius ornare.dasd
            </Text>
          </ScrollView>
      </Layout>
      <Divider/>
      <Button style={styles.button}>Mua ngay</Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 4,
  },
  headerImage: {
    resizeMode: 'cover',
    height: (height / 2)/1.5,
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