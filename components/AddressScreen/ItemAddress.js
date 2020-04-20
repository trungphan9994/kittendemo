import React, { useCallback, useState } from 'react';
import {
    SafeAreaView, StyleSheet,
    View, Alert
} from 'react-native';
import {
    Layout,
    OverflowMenu,
    Select, Text, Icon
} from '@ui-kitten/components';
//cú pháp này để tạo tên khác cho biến item,
const ItemAddress = ({ item:formAddress, handleDefaultAdress, handleDeleteAdress,handleEidtAdress,setModalvisible,setformAddress,setlable }) => {
    const data = [
        { title: 'Chỉnh sửa' },
        { title: 'Đặt làm mặc định' },
        { title: 'Xóa' },
    ];
    const [menuVisible, setMenuVisible] = React.useState(false);
    const onItemSelect = (index) => {
        if (index === 0) {
            setformAddress(formAddress)
            setlable("Chỉnh sửa địa chỉ")
            setModalvisible(true)
        }
        if (index === 1) {
            handleDefaultAdress(formAddress.id)
        }
        if (index === 2) {
            Alert.alert(
                'Xóa Địa Chỉ',
                `Bạn muốn xóa địa chỉ này không?`,
                [
                    {
                        text: 'Hủy',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'Đồng ý', onPress: () => {
                            handleDeleteAdress(formAddress.id)
                        }
                    }
                ],
                { cancelable: false }
            );

        }
        // setSelectedIndex(index);
        setMenuVisible(false);
    };
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <SafeAreaView >
            <Layout style={{ marginLeft: 20, marginRight: 10, marginTop: 10 }}>
                <Layout style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center', marginBottom: 5
                }}>
                    <Text category="h6" style={{ fontWeight: 'bold',fontSize:14 }}>
                        {formAddress.name}
                    </Text>
                    {/* <Icon name='more-vertical-outline' style={{ width: 32 }} width={28} height={28} fill='#231F20'

                    /> */}
                    <OverflowMenu
                        data={data}
                        visible={menuVisible}
                        onSelect={(index)=>onItemSelect(index)}
                        onBackdropPress={toggleMenu}>
                        <Icon name='more-vertical-outline' style={{ width: 32 }} width={28} height={28} fill='#231F20'
                            onPress={toggleMenu}
                        />
                    </OverflowMenu>
                </Layout>
                <Text category="h6" style={{ marginBottom: 5,fontSize:14 }}>
                    {formAddress.phone}
                </Text>
                <Text category="h6" style={{ marginBottom: 5,fontSize:14 }}>
                    {formAddress.address},{formAddress.ward.text},{formAddress.district.text},{formAddress.city.text}
                </Text>
                {formAddress.defaultAdress ? <Text category="h6" style={{ marginBottom: 5, color: '#DD3640',fontSize:14 }}>
                    Địa chỉ mặc định
                </Text>
                    : <></>}
            </Layout>
            <Layout style={{
                height: 10,
                backgroundColor: '#f7f8fb'
            }} />
        </SafeAreaView>
    );
};

export default ItemAddress;
