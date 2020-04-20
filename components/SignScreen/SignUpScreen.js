
import React, { useCallback, useState } from 'react';
import { Button, Layout, Input} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import { IconSecure} from '../Share/IconComponent';
const SignUpScreen = ({ navigation,isFromCartScreen }) => {
    const [formData, setFormData] = useState({ name: '', phone: '',email: '', password: '' });
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const handleInputChange = useCallback((name, value) => {
        return setFormData((formDataState) => ({
            ...formDataState,
            [name]: value
        }));
    }, []);
    const navigateHome = useCallback(() => {
        navigation.navigate('HomeScreen');
    }, [navigation]);
    const onIconPress = useCallback(() => {
        setSecureTextEntry((secureTextEntryState) => !secureTextEntryState);
    }, []);

    const RenderIcon = (props) => (
        <IconSecure {...props} secureTextEntry={secureTextEntry} />
    );
    const { name,phone,email, password } = formData;
    return (
        <Layout style={indexStyles.LayoutContainer}>
            <Layout style={indexStyles.LayoutContent}>
                <Input
                    label="HỌ TÊN"
                    style={indexStyles.Input}
                    value={name}
                    onChangeText={(value) =>
                        handleInputChange('name', value)
                    }
                    placeholder="Họ tên"
                />
                <Input
                    label="SỐ ĐIỆN THOẠI"
                    value={phone}
                    placeholder="Số điện thoại"
                    keyboardType='phone-pad'
                    style={indexStyles.Input}
                    onChangeText={(value) =>
                        handleInputChange('phone', value)
                    }
                />
                <Input
                    label="EMAIL"
                    style={indexStyles.Input}
                    value={email}
                    keyboardType='email-address'
                    onChangeText={(value) =>
                        handleInputChange('email', value)
                    }
                    placeholder="horizontech@gmail.com"
                />
                <Input
                    label="MẬT KHẨU"
                    value={password}
                    placeholder="********"
                    style={indexStyles.Input}
                    icon={RenderIcon}
                    secureTextEntry={secureTextEntry}
                    onIconPress={onIconPress}
                    onChangeText={(value) =>
                        handleInputChange('password', value)
                    }
                />
                <Button style={indexStyles.Button} onPress={()=>navigation.navigate('HomeScreen')}>
                    ĐĂNG KÝ
                </Button>
            </Layout>
        </Layout>
    )
}
export default SignUpScreen;
const indexStyles = StyleSheet.create({
    Input: {
        marginBottom: 16
    },
    SafeAreaView: {
        flex: 1,
        backgroundColor: '#E6E6E6'
    },
    LayoutContainer: {
        flex: 1
    },
    LayoutContent: {
        flex:1,
        marginHorizontal: 20,
        marginTop: 20
    },
    Button: {
        backgroundColor: '#1654B4',
        borderRadius: 5
    }
});