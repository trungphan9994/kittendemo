import React, { useState, useMemo, useContext, useCallback } from 'react';
import { ScrollView, FlatList, StyleSheet, Alert } from 'react-native';
import {
    Layout,
    TopNavigation,
    TopNavigationAction, Divider, Text, Radio, Input, Button, RadioGroup
} from '@ui-kitten/components';
import { BackIcon } from '../../Share/IconComponent';
import GlobalContext from '../../../context/global';
import { format_number } from '../../FormatNumber';
const ItemDetailOrder = ({ navigation }) => {
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );

    return (
        <Layout style={styles.Layout}>
            <TopNavigation title='Chi tiết đơn hàng' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Divider />
            <ScrollView >
                <Layout style={[styles.Layout1]}>
                    <Text style={{ fontSize: 14 }} appearance='hint' category="h5">
                        ID đơn hàng:
                    </Text>
                    <Layout style={styles.Layout2}>
                        <Text style={{ fontSize: 14 }} category="h5">
                            00000003
                    </Text>
                    </Layout>
                    <Text style={{ fontSize: 12 }} appearance='hint' category="h5">
                        09:30 03/04/2020
                    </Text>
                </Layout>
                <Layout style={[styles.Layout1]}>
                    <Text style={{ fontSize: 14 }} appearance='hint' category="h5">
                        Trạng thái:
                    </Text>
                    <Layout style={styles.Layout2}>
                        <Text style={{ fontSize: 14, color: '#1654B4', fontWeight: 'bold' }} category="h5">
                            Đã mua hàng
                    </Text>
                    </Layout>
                </Layout>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>ĐỊA CHỈ NHẬN HÀNG </Text>
                </Layout>
                <Layout style={styles.marginLayout}>
                    {/* <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 8 }}>{name} - {phone} </Text> */}
                    {/* <Text>{address},{ward.text},{district.text},{city.text} </Text> */}
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 8 }}>Nguyễn Văn Anh - 0902345897</Text>
                    <Text>234 Kênh Tân Hoá, Phường ABC, Quận Tân Phú, Hồ Chí Minh</Text>
                </Layout>
                <Layout style={{ backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>HÌNH THỨC THANH TOÁN </Text>
                </Layout>
                <Text style={styles.marginLayout}>Thanh toán bằng cách chuyển khoản qua ngân hàng </Text>
                <Text style={{ marginLeft: 20, marginRight: 20, fontStyle: 'italic', color: '#DD3640' }}>Chưa thanh toán </Text>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>THÔNG TIN VẬN CHUYỂN </Text>
                    <Text style={[styles.marginLayout, styles.textunderline]}
                        onPress={() => navigation.navigate('OrderTrackScreen', { isFromCheckout: false })}
                    >Xem</Text>
                </Layout>
                <Text style={[styles.marginLayout, { color: '#1654B4' }]}>Chờ thanh toán </Text>
                <Text style={{ marginLeft: 20, marginRight: 20 }} appearance='hint'>16:00 02/04/2020 </Text>
                <Layout style={{ backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>ĐƠN HÀNG </Text>
                </Layout>

                {/* {Flatlist} */}
                {/* <FlatList
                    data={cartList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ItemCheckout item={item} />}
                /> */}


                <Divider />
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Tạm tính </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize]}>
                        {/* {format_number(total)} đ  */}
                        {format_number(2200000)} đ
                    </Text>
                </Layout>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Mã giảm giá </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize]}>
                        {/* {format_number(total)} đ  */}
                        {format_number(2000000 * 0.1)} đ
                    </Text>
                </Layout>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Phí vận chuyển </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize]}>
                        {/* {format_number(transportfee)} đ  */}
                        {format_number(0)} đ
                    </Text>
                </Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Thành tiền </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize, styles.fontSizeTotal]}>
                        {/* {format_number(total + transportfee)}đ */}
                        {format_number(2000000)} đ
                    </Text>
                </Layout>

            </ScrollView>
            <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                    appearance='outline'
                    style={[styles.buttonAddProduct, styles.colorButton]}>Hủy đơn hàng</Button>
                <Button
                    onPress={() => navigation.navigate('ChatScreen')}
                    style={[styles.button, styles.buttonBuy]}>Chat ngay</Button>
            </Layout>
        </Layout>
    );
};
export default ItemDetailOrder;
const styles = StyleSheet.create({
    Layout: { flex: 1 },
    // TopNavigation: { marginTop: 20 },
    Layout1: { flex: 1, flexDirection: 'row', marginLeft: 20, marginRight: 20 },
    Layout2: { flex: 1, flexDirection: 'column', marginLeft: 5, justifyContent: 'center' },
    titleStyle: { fontWeight: 'bold', fontSize: 20 },
    marginLayout: {
        marginLeft: 20, marginRight: 20, marginBottom: 10, marginTop: 10
    },
    textunderline: {
        textDecorationLine: 'underline', color: '#1654B4'
    },
    marginRadiobutton: {
        marginTop: 5, marginBottom: 5
    },
    backgroundColorButton: { backgroundColor: '#DD3640', borderColor: '#DD3640' },
    textColorandfontSize: {
        fontWeight: 'bold',

    },
    fontSizeTotal: { fontSize: 20, color: '#D82828' },
    buttonAddProduct: {
        backgroundColor: '#D82828',
        borderRadius: 8,
        borderColor: '#1654B4',
        marginLeft: 24,
        marginTop: 14,
        marginBottom: 14,

    },
    colorButton: {
        backgroundColor: '#fff',
    },
    buttonBuy: {
        flex: 1,
        backgroundColor: '#1654B4',
        borderRadius: 8,
        borderColor: '#1654B4',
    },
    button: {
        borderRadius: 8,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 14,
        marginBottom: 14
    },
})
