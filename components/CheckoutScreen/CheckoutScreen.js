import React, { useState, useMemo, useContext, useCallback } from 'react';
import { ScrollView, FlatList, StyleSheet, Alert } from 'react-native';
import {
    Layout,
    TopNavigation,
    TopNavigationAction, Divider, Text, Radio, Input, Button, RadioGroup
} from '@ui-kitten/components';
import { BackIcon } from '../Share/IconComponent';
import ItemCheckout from './ItemCheckout/ItemCheckout';
import GlobalContext from '../../context/global';
import { format_number } from '../FormatNumber';
import AddressModal from '../Modals/AddressModal.js'
const CheckoutScreen = ({ navigation, route }) => {
    let transportfee = 20000;
    const { total } = route.params;
    const { cartList, handleRemoveCart } = useContext(GlobalContext);
    const [modalvisible, setModalvisible] = useState(false);
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    const [formAdress, setFormAdress] = useState({ name: '', phone: '', address: '', city: '', district: '', ward: '', default: false });
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onCheckedChange = (index) => {
        setSelectedIndex(index);
    };
    const [discount, setDiscount] = React.useState('');
    const [checkedCod, setCheckedCod] = React.useState(false);
    const handleCancleModalChangeAddress = useCallback(() => {
        setModalvisible(false);
    }, [])
    const handleDoneModalChangeAddress = useCallback((Adress) => {
        setModalvisible(false);
        console.log("Adredsadsadsadsdsad", Adress);
        setFormAdress(Adress)
    }, [])
    const checkDone = useCallback((valueName, index) => {
        console.log(typeof valueName, valueName, index)
        if (valueName !== "") {
            if (index === 1) {
                Alert.alert(
                    '',
                    `Để hoàn tất quá trình đặt hàng. Bạn hãy thanh toán đơn hàng bằng hình thức chuyển khoản theo cú pháp: <Tên của bạn> <SĐT> 
vào tài khoản bên dưới.
    STK: 0129432554583495
    Chủ TK: Lê Văn Anh
    Ngân hàng: Vietcombank chi nhánh 1`,
                    [
                        {
                            text: 'Theo dõi đơn hàng',
                            onPress: () => { navigation.navigate('OrderTrackScreen', { isFromCheckout: true }); handleRemoveCart(); },

                            style: 'cancel'
                        },
                        {
                            text: 'Quay lại trang chủ',
                            onPress: () => { navigation.navigate('HomeScreen'); handleRemoveCart(); },
                        }
                    ],
                    { cancelable: false }
                );
            }
            else {
                Alert.alert(
                    '',
                    `Cám ơn bạn đã đặt hàng. Đơn hàng của bạn sẽ được giao sớm nhất có thể!`,
                    [
                        {
                            text: 'Xem đơn hàng',
                            onPress: () => { navigation.navigate('OrderManagementScreen', { isFromCheckout: true }); handleRemoveCart(); },

                            style: 'cancel'
                        },
                        {
                            text: 'Quay lại trang chủ',
                            onPress: () => { navigation.navigate('HomeScreen'); handleRemoveCart(); },
                        }
                    ],
                    { cancelable: false }
                );
            }
        }
        else {
            Alert.alert(
                '',
                `Bạn chưa có địa chỉ nhận hàng. Thêm địa chỉ nhận hàng ngay!`,
                [
                    {
                        text: 'Thoát',
                        onPress: () => console.log('Cancel Địa chỉ Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => setModalvisible(true),
                    }
                ],
                { cancelable: false }
            );
        }


    }, [])
    const { name, phone, address, city, district, ward } = formAdress;
    return (
        <Layout style={styles.Layout}>
            <TopNavigation title='Thông tin mua hàng' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Divider />
            <AddressModal
                lable={"Thêm địa chỉ"}
                isOpen={modalvisible}
                handleCancleModalChangeAddress={handleCancleModalChangeAddress}
                handleDoneModalChangeAddress={handleDoneModalChangeAddress}
                formAddress={formAdress}
            />
            <ScrollView >
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>ĐỊA CHỈ NHẬN HÀNG </Text>
                    <Text style={[styles.marginLayout, styles.textunderline]}
                        onPress={() => setModalvisible(true)}
                    >Thay đổi</Text>
                </Layout>
                {
                    formAdress.name !== "" ? (
                        <Layout style={styles.marginLayout}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 8 }}>{name} - {phone} </Text>
                            <Text>{address},{ward.text},{district.text},{city.text} </Text>
                        </Layout>
                    ) : (
                            <Layout style={styles.marginLayout}>
                                <Text>Chưa có địa chỉ nhận hàng</Text>
                            </Layout>

                        )
                }
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>ĐƠN HÀNG </Text>
                </Layout>
                {/* {Flatlist} */}
                <FlatList
                    data={cartList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ItemCheckout item={item} />}
                />

                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>HÌNH THỨC THANH TOÁN </Text>
                </Layout>
                <Layout style={styles.marginLayout}>
                    <RadioGroup
                        selectedIndex={selectedIndex}
                        onChange={onCheckedChange}>
                        <Radio style={styles.marginRadiobutton} text='Thanh toán khi nhận hàng (COD).' />
                        <Radio style={styles.marginRadiobutton} text='Thanh toán bằng cách chuyển khoản qua ngân hàng.' />
                    </RadioGroup>

                    {
                        selectedIndex === 1 ?
                            (
                                <Layout style={{ marginLeft: 30 }}>
                                    <Text>STK: 0129432554583495</Text>
                                    <Text>Chủ TK: Lê Văn Anh</Text>
                                    <Text>Ngân hàng: Vietcombank chi nhánh 1</Text>
                                </Layout>

                            ) : (<></>)
                    }
                </Layout>
                <Divider />
                <Input
                    style={styles.marginLayout}
                    label='MÃ GIẢM GIÁ'
                    placeholder='Nhập mã giảm giá'
                    value={discount}
                    onChangeText={setDiscount}
                />
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Tạm tính </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize]}>{format_number(total)} đ </Text>
                </Layout>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Phí vận chuyển </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize]}>{format_number(transportfee)} đ </Text>
                </Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Thành tiền </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize, styles.fontSizeTotal]}>{format_number(total + transportfee)}đ </Text>
                </Layout>
            </ScrollView>
            <Button style={[styles.marginLayout, styles.backgroundColorButton]}
                onPress={() => checkDone(name, selectedIndex)}
            >Hoàn tất đơn hàng</Button>
        </Layout>
    );
};
export default CheckoutScreen;
const styles = StyleSheet.create({
    Layout: { flex: 1 },
    // TopNavigation: { marginTop: 20 },
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
    fontSizeTotal: { fontSize: 20, color: '#D82828' }
})
