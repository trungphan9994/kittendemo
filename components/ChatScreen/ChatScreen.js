import React, { useMemo, useContext, useCallback } from 'react';
import {
    Layout,
    TopNavigation,
    TopNavigationAction, Divider
} from '@ui-kitten/components';
import { BackIcon } from '../Share/IconComponent';
const ChatScreen = ({ navigation }) => {
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    return (
        <Layout style={{ flex: 1 }}>
            <TopNavigation title='Chat' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Divider />
        </Layout>
    );
};

export default ChatScreen;

