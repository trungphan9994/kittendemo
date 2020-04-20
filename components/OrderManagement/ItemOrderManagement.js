import React from 'react';
import { SafeAreaView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Layout, Text, Divider, Icon } from '@ui-kitten/components';
import { format_number } from '../FormatNumber'
const { width, height } = Dimensions.get('window');
const ItemOrderManagement = ({ item, navigation }) => {

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <TouchableOpacity onPress={() => { navigation.navigate('DetailOrder') }}>
                <Layout style={[styles.Layout, { marginTop: 5, marginBottom: 5 }]}>
                    {item.status === 1 ? <Icon width={32} height={32} name='clock' fill='#1654B4' /> :
                        item.status === 2 ? <Icon width={32} height={32} name='close-circle' fill='#DD3640' /> :
                            <Icon width={32} height={32} name='checkmark-circle-2' fill='#00997A' />
                    }

                    <Layout style={styles.Layout1}>
                        <Text style={{ fontSize: 16 }} category="h5">
                            ID: 00000003
                    </Text>
                    </Layout>
                    <Text style={{ fontSize: 16, marginRight: 5 }} appearance='hint' category="h5">
                        09:30 03/04/2020
                    </Text>
                </Layout>
                <Divider style={{ marginBottom: 10 }} />
                <Layout style={styles.Layout}>
                    <Image style={styles.headerImage} source={{ uri: item.url }} />
                    <Layout style={styles.Layout}>
                        <Layout style={styles.Layout1}>
                            <Text category="h6">
                                {item.name}
                            </Text>
                        </Layout>
                        <Layout style={styles.count}>
                            <Text style={{ fontWeight: 'bold' }} category="h6">
                                {/* {format_number(item.price / item.count)} đ */}
                                {format_number(item.price)} đ
                        </Text>
                            <Text category="h6">
                                {/* x {item.count} */}
                            x 1
                        </Text>
                        </Layout>
                    </Layout>
                </Layout>
                <Divider style={{ marginTop: 10 }} />
                <Layout style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
                    <Text style={{ fontStyle: 'italic', marginRight: 10 }}>xem thêm 1 sản phẩm</Text>
                </Layout>
                <Layout style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center', marginLeft: 5, marginRight: 10
                }}>
                    <Text style={[styles.priceText, { fontSize: 16 }]} category="h5">
                        1 sản phẩm
                    </Text>
                    <Text style={[styles.priceText, { fontSize: 16, fontWeight: 'bold' }]} category="h5">
                        {format_number(item.price + 20000)} đ
                </Text>
                </Layout>
                <Layout style={{
                    width: width,
                    height: 10,
                    backgroundColor: '#f7f8fb'
                }} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: 'white', marginLeft: 10, marginRight: 10 },
    Layout: { flex: 1, flexDirection: 'row', marginLeft: 5, marginRight: 5 },
    Layout1: { flex: 1, flexDirection: 'column', marginLeft: 5, justifyContent: 'center' },
    headerText: {
        marginLeft: 4
    },
    count: {
        alignItems: 'flex-end',
    },
    priceText: {
        marginVertical: 2,
        fontWeight: 'bold'
    },
    countText: { marginLeft: 10, marginRight: 10 },
    headerImage: {
        resizeMode: 'cover',
        height: 60,
        width: 60
    },
    titleStyle: { fontWeight: 'bold', fontSize: 20 }
});
export default ItemOrderManagement;
