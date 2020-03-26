import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity, View, Alert } from 'react-native';
import { Divider, Icon, Layout, Text, Button } from '@ui-kitten/components';
import Data from './Data';
const { width, height } = Dimensions.get('window');

export const ItemCart = ({ item }) => {
    const [count, setCount] = React.useState(1);
    const PlusProduct = () => {
        setCount(count + 1)
    }
    const MinusProduct = () => {
        if (count === 1) {
        } else {
            setCount(count - 1)
        }
    }

    const DeleteProduct = () => {
        Alert.alert('Bạn muốn xóa sản phẩm: \n' + item.name);
        let Vi_tri= Data.DATA.findIndex((items)=>{return items.id===item.id});
        console.log(Vi_tri);
        Data.DATA.splice(Vi_tri,1);
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Layout style={{ flex: 1, flexDirection: 'row', margin: 5 }}>
                <Image
                    style={styles.headerImage}
                    source={{ uri: item.url }}
                />
                <Layout style={{ flex: 1, flexDirection: 'column', marginLeft: 5 }} >
                    <Text
                        style={styles.headerText}
                        category='h5'>
                        {item.name}
                    </Text>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='h6'>
                        {item.category}
                    </Text>
                    <Text
                        style={{
                            marginLeft: 4,
                            marginVertical: 6,
                            fontWeight: 'bold'
                        }}
                        category='h5'>
                        {item.price}đ
                    </Text>
                    <Layout style={{ flexDirection: 'row', marginTop: 8, marginLeft: 4, alignItems: 'flex-start' }}>
                        <Layout style={[styles.buttonIconContainer]}>
                            <Icon name='minus' width={32} height={32} fill='#FFFFFF' onPress={MinusProduct} />
                        </Layout>
                        <Text category='h4' style={{ marginLeft: 10, marginRight: 10 }}>{count}</Text>
                        <Layout style={[styles.buttonIconContainer]}>
                            <Icon name='plus' width={32} height={32} fill='#FFFFFF' onPress={PlusProduct} />
                        </Layout>
                    </Layout>
                </Layout>
                <Icon name='close' style={{ width: 32 }} width={32} height={32} fill='#BDBDBD' onPress={DeleteProduct} />
            </Layout>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    headerText: {
        marginLeft: 4
    },
    headerImage: {
        resizeMode: 'cover',
        height: (height / 2) / 2,
        width: (width / 3),
    },
    buttonIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32, height: 32,
        borderRadius: 32,
        backgroundColor: "#E0E0E0"
    },
});