import React, { useCallback } from 'react';
import { SafeAreaView, Image, Alert, StyleSheet, Dimensions } from 'react-native';
import { Icon, Layout, Text } from '@ui-kitten/components';
import { format_number } from '../FormatNumber'
const { width, height } = Dimensions.get('window');
const ItemCart = ({ item, removeCartItem, changeCartItem }) => {

    const DeleteProduct = useCallback(() => {
        Alert.alert(
            'Xóa sản phẩm',
            `Bạn muốn xóa sản phẩm này không?`,
            [
                {
                    text: 'Hủy',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK', onPress: () => {
                        removeCartItem(item.id)
                    }
                }
            ],
            { cancelable: false }
        );
    }, [item]);
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <Layout style={styles.Layout}>
                <Image style={styles.headerImage} source={{ uri: item.url }} />
                <Layout style={styles.Layout1}>
                    <Text style={styles.headerText} category="h5">
                        {item.name}
                    </Text>
                    <Text
                        style={styles.headerText}
                        appearance="hint"
                        category="h6"
                    >
                        {item.category}
                    </Text>
                    <Text style={styles.priceText} category="h5">
                        {format_number(item.price / item.count)}đ
                    </Text>
                    <Layout style={styles.Layout2}>
                        <Layout style={[styles.buttonIconContainer]}>
                            <Icon
                                name="minus"
                                width={32}
                                height={32}
                                fill="#FFFFFF"
                                onPress={() => changeCartItem(item.id, -1)}
                            />
                        </Layout>
                        <Text category="h4" style={styles.countText}>
                            {item.count}
                        </Text>
                        <Layout style={[styles.buttonIconContainer]}>
                            <Icon
                                name="plus"
                                width={32}
                                height={32}
                                fill="#FFFFFF"
                                onPress={() => changeCartItem(item.id, 1)}
                            />
                        </Layout>
                    </Layout>
                </Layout>
                <Icon
                    name="close"
                    style={styles.closeIcon}
                    width={32}
                    height={32}
                    fill="#BDBDBD"
                    onPress={() => DeleteProduct()}
                />
            </Layout>
        </SafeAreaView>
    );
};

export default ItemCart;
const styles = StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: 'white' },
    Layout: { flex: 1, flexDirection: 'row', margin: 5 },
    Layout1: { flex: 1, flexDirection: 'column', marginLeft: 5 },
    Layout2: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 4,
        alignItems: 'flex-start'
    },
    headerText: {
        marginLeft: 4
    },
    priceText: {
        marginLeft: 4,
        marginVertical: 6,
        fontWeight: 'bold'
    },
    countText: { marginLeft: 10, marginRight: 10 },
    headerImage: {
        resizeMode: 'cover',
        height: height / 2 / 2,
        width: width / 3
    },
    closeIcon: { width: 32 },
    buttonIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 32,
        backgroundColor: '#E0E0E0'
    }
})