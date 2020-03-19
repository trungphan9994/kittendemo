import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { Button, Layout, Input, Icon, CheckBox, Text } from '@ui-kitten/components';
import { StatusBar } from 'react-native'
import { ThemeContext } from '../theme-context';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
export const SignInScreen = ({ navigation }) => {
    const [value, setValue] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [checked, setChecked] = React.useState(false);


    const navigateHome = () => {
        navigation.navigate('HomeScreen');
    };
    const renderIcon = (style = {}) => (
        <Icon
            {...style}
            name={!secureTextEntry ? 'eye' : 'eye-off'}
        />
    );
    const onIconPress = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };
    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E6E6E6' }}>
            <StatusBar barStyle = "light-content" translucent backgroundColor="transparent"/>
            <Layout style={{ flex: 1 }}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#061636', '#12407D']} style={{justifyContent: 'center', height: height / 4 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 20 }} category='h3'>Đăng nhập</Text>
                </LinearGradient>
                <Layout style={{ marginHorizontal: 20, marginTop: 40 }}>
                    <Input
                        label="Email"
                        style={styles.input}
                        value={value}
                        onChangeText={setValue}
                        placeholder='Email'
                    />

                    <Input
                        label="Password"
                        value={password}
                        placeholder='********'
                        style={styles.input}
                        icon={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onIconPress={onIconPress}
                        onChangeText={setPassword}
                    />
                    <CheckBox
                        text='Nhớ mật khẩu'
                        checked={checked}
                        onChange={onCheckedChange}
                        style={{ marginBottom: 16 }}
                    />
                    <Button style={{ backgroundColor: '#12407D', borderRadius: 25 }} onPress={navigateHome}>ĐĂNG NHẬP</Button>
                </Layout>
            </Layout>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    input: {
        marginBottom: 16
    },
})