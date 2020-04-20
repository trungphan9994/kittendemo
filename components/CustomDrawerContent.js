import React, { useState, useCallback, useContext } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar, Divider, Layout, Icon } from '@ui-kitten/components';
import {
    DrawerItem
} from '@react-navigation/drawer';
import GlobalContext from '../context/global';
const ConfirmLogOut = (navigation, changeIsAuth) => {
    Alert.alert(
        'LogOut',
        'Bạn muốn đăng xuất?',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => { { navigation.navigate('SignInUpScreen',{isFromCartScreen:false}), changeIsAuth(false) } } }
        ],
        { cancelable: false }
    );
};
const CustomDrawerContent = ({ ...rest }) => {
    const { isAuth, changeIsAuth } = useContext(GlobalContext);
    console.log(isAuth)
    const [ispress, setIsPress] = useState(false)
    return (
        <View style={{ flex: 1 }}>
            {isAuth ? (
                <View style={styles.DrawerHeaderFooter}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar style={styles.drawerImage} size='large' source={{
                            uri: 'https://i.pinimg.com/originals/47/fa/ee/47faee72871798390d518d0681ac6aab.jpg'
                        }}
                        />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Nguyễn Văn Anh</Text>
                            <Text style={styles.textUnderline} onPress={() => rest.navigation.navigate("ProfileScreen")}>Chỉnh sửa thông tin</Text>
                        </View>
                    </View>
                </View>) : (
                    <View style={styles.DrawerHeaderFooter}>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar style={styles.drawerImage} size='large' source={{
                                uri: 'https://library.kissclipart.com/20181005/bee/kissclipart-white-person-icon-png-clipart-computer-icons-deskt-73f851694f2ebca8.jpg'
                            }}
                            />
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 11 }}>Chào mừng bạn đến với Horizon Tech</Text>
                                <Text style={{ textDecorationLine: 'underline', fontSize: 14, color: '#1654B4', fontWeight: 'bold' }} onPress={() => rest.navigation.navigate('SignInUpScreen', { isFromCartScreen: false })}>Đăng nhập/ Đăng ký</Text>
                            </View>
                        </View>
                    </View>)}
            <View style={{ flex: 1 }}>
                {/* <Divider />
                <DrawerItem label="Danh sách danh mục sản phẩm" onPress={() => rest.navigation.navigate('HomeScreen')} />
                <Divider />
                <DrawerItem label="Đơn hàng của tôi" onPress={() => rest.navigation.navigate('OrderManagementScreen', { isFromCheckout: false })} />
                <Divider />
                <DrawerItem label="Giỏ hàng hiện tại" onPress={() => rest.navigation.navigate('CartScreen')} />
                <Divider /> */}
                <TouchableOpacity onPress={() => setIsPress(!ispress)}>
                    <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 20, marginBottom: 15 }}>
                        <Text>Danh mục sản phẩm</Text>
                        {ispress === false ? <Icon name='arrow-ios-downward-outline' fill='#8F9BB3' width={32} height={32} />
                            : <Icon name='arrow-ios-upward-outline' fill='#8F9BB3' width={32} height={32} />}
                    </Layout>
                </TouchableOpacity>
                {ispress === true ?
                    <View style={{ marginLeft: 40 }}>
                        <Divider />
                        <Text style={{ marginTop: 10, marginBottom: 10 }} onPress={() => { rest.navigation.navigate('HomeScreen'), setIsPress(false) }}>Danh mục 1</Text>
                        <Divider />
                        <Text style={{ marginTop: 10, marginBottom: 10 }} onPress={() => { rest.navigation.navigate('HomeScreen'), setIsPress(false) }}>Danh mục 2</Text>
                        <Divider />
                        <Text style={{ marginTop: 10, marginBottom: 10 }} onPress={() => { rest.navigation.navigate('HomeScreen'), setIsPress(false) }}>Danh mục 3</Text>
                    </View>

                    : <></>}
                <Divider />
                <Text style={{ marginLeft: 20, marginTop: 15, marginBottom: 15 }} onPress={() => { rest.navigation.navigate('OrderManagementScreen', { isFromCheckout: false }), setIsPress(false) }}>Đơn hàng của tôi</Text>
                <Divider />
                <Text style={{ marginLeft: 20, marginTop: 15, marginBottom: 15 }} onPress={() => { rest.navigation.navigate('CartScreen'), setIsPress(false) }}>Giỏ hàng hiện tại</Text>
                <Divider />
            </View>
            <View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 20 }}>
                    <Text >Hotline hỗ trợ:</Text>
                    <Text style={{ fontWeight: 'bold' }}> 0903 234 234</Text>
                </View>
                <Divider />
                {isAuth ?
                    < DrawerItem label="ĐĂNG XUẤT" labelStyle={{ color: "red" }} onPress={() => ConfirmLogOut(rest.navigation, changeIsAuth)} />
                    : <></>
                }
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    DrawerHeaderFooter: { height: 120, justifyContent: 'center', marginLeft: 10 },
    drawerImage: { height: 50, width: 50, resizeMode: 'cover' },
    textUnderline: { textDecorationLine: 'underline' },

});
export default CustomDrawerContent;
