import React, { useMemo, useContext, useCallback } from 'react';
import {
    Layout,
    TopNavigation,
    TopNavigationAction, Divider
} from '@ui-kitten/components';
import { BackIcon } from '../Share/IconComponent';
import { RightControls } from '../Share/RightControls';
import { DATA } from '../Data.js';
import { FlatList } from 'react-native';
import styles from './styles';
import ItemOrderManagement from './ItemOrderManagement'
const OrderManagementScreen = ({ navigation, route }) => {
    const { isFromCheckout } = route.params;
    console.log(isFromCheckout)
    const navigateBack = useCallback(() => {
        if (isFromCheckout) {
            navigation.navigate('HomeScreen')
        }
        else {
            navigation.goBack();
        }

    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    return (
        <Layout style={styles.Layout}>
            <TopNavigation title='Quản lý đơn hàng' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Divider />
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ItemOrderManagement item={item} navigation={navigation} />}
            />
        </Layout>
    );
};

export default OrderManagementScreen;
