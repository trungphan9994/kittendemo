import React, { useMemo, useContext,useCallback } from 'react';
import {
    Layout,
    TopNavigation,
    TopNavigationAction,Divider
} from '@ui-kitten/components';
import { BackIcon } from '../Share/IconComponent';
import { RightControls } from '../Share/RightControls';
import styles from './styles';
const OrderTrackScreen = ({ navigation,route }) => {
    const {isFromCheckout} =route.params;
    console.log(isFromCheckout)
    const navigateBack = useCallback(() => {
        if(isFromCheckout){
            navigation.navigate('HomeScreen')
        }
        else{
            navigation.goBack();
        }
        
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    return (
        <Layout style={styles.Layout}>
            <TopNavigation title='Theo dõi đơn hàng' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Divider/>
        </Layout>
    );
};

export default OrderTrackScreen;
