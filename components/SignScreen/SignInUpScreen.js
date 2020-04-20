import React, { useMemo, useContext } from 'react';
import {
    Layout,
    TopNavigation,
    TopNavigationAction, Divider
} from '@ui-kitten/components';
import { DeleteIcon } from '../Share/IconComponent';
import { StyleSheet, Dimensions, Text } from 'react-native';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import { TabView, TabBar } from 'react-native-tab-view';
const SignInUpScreen = ({ navigation, route }) => {
    const { isFromCartScreen } = route.params;
    console.log("isFromCartScreens", isFromCartScreen)
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'signin', title: 'Đăng nhập' },
        { key: 'signup', title: 'Đăng ký' },
    ]);
    const renderTabBar = props => (
        <TabBar
            {...props}
            renderLabel={({ route, focused, color }) => (
                <Text style={{ color: '#1654B4', margin: 4, fontWeight: 'bold' }}>
                    {route.title}
                </Text>
            )}
            indicatorStyle={{ backgroundColor: '#1654B4' }}
            style={{ backgroundColor: 'white' }}
        />
    );

    return (
        <Layout style={styles.Layout}>
            <TopNavigation
                style={styles.TopNavigation}
                title="Đăng ký / Đăng nhập"
                alignment="center"
                titleStyle={styles.titleStyle}
                leftControl={
                    <TopNavigationAction
                        icon={DeleteIcon}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                }
            />
            <Divider />
            <TabView
                lazy
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={({ route, jumpTo }) => {
                    switch (route.key) {
                        case 'signin':
                            return <SignInScreen jumpTo={jumpTo} navigation={navigation} isFromCartScreen={isFromCartScreen} />;
                        case 'signup':
                            return <SignUpScreen jumpTo={jumpTo} navigation={navigation} isFromCartScreen={isFromCartScreen} />;
                    }
                }}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        </Layout>
    );
};

export default SignInUpScreen;
const styles = StyleSheet.create({
    Layout: { flex: 1 },
    // TopNavigation: { marginTop: 20 },
    titleStyle: { fontWeight: 'bold', fontSize: 20 }
})