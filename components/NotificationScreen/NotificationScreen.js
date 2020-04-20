import React, { useMemo, useContext, useCallback } from 'react';
import {
    Layout,
    TopNavigation,
    TopNavigationAction, Divider
} from '@ui-kitten/components';
import { BackIcon } from '../Share/IconComponent';
import { RightControls } from '../Share/RightControls';
import styles from './styles';
import ItemNoti from './ItemNoti';
import { FlatList } from 'react-native';
const NotificationScreen = ({ navigation }) => {
    let Timestamp = parseInt((new Date()).getTime() / 1000); // get timestamp hiện tại
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
        {
            return 'Just now';
        }
        const intervals = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'min': 60,
            'second': 1
        };
        let counter;
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0) {
                if (counter === 1) {
                    return counter + ' ' + i; // singular (1 day)
                } else {
                    return counter + ' ' + i + 's'; // plural (2 days)
                }
            }
        }
    }
    return value;
    const DATA = [
        { id: 1, name: 'Miễn phí vận chuyển trong tháng 4/2020', time: '1 phút trước' },
        { id: 2, name: 'Săn deal giá rẻ vào lúc 20h00 20/04/2020', time: '2 giờ trước' },
        { id: 3, name: 'Horizon Tech gửi bạn mã code giảm 30.000 khi thanh toán bằng hình thức thanh toán khi nhận hàng', time: '23 giờ trước' },
        { id: 4, name: 'Săn deal giá rẻ vào lúc 13h00 19/04/2020', time: '11:00 19/04/2020' }
    ]
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    return (
        <Layout style={styles.Layout}>
            <TopNavigation title='Thông báo' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Divider style={{ marginBottom: 10 }} />
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ItemNoti item={item} navigation={navigation} />}
            />
        </Layout>
    );
};

export default NotificationScreen;
