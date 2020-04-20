
import React, { useCallback, useState,useContext } from 'react';
import { Text, TouchableOpacity, Image,View,StyleSheet } from 'react-native';
import { Button, Layout, Input, CheckBox } from '@ui-kitten/components';
import GlobalContext from '../../context/global';

import { IconSecure} from '../Share/IconComponent';
const SignInScreen = ({ navigation,isFromCartScreen }) => {
    const { changeIsAuth} = useContext(GlobalContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [checked, setChecked] = useState(false);
    const handleInputChange = useCallback((name, value) => {
        return setFormData((formDataState) => ({
            ...formDataState,
            [name]: value
        }));
    }, []);
    const onIconPress = useCallback(() => {
        setSecureTextEntry((secureTextEntryState) => !secureTextEntryState);
    }, []);

    const onCheckedChange = useCallback(() => {
        setChecked((isChecked) => !isChecked);
    }, []);
    const RenderIcon = (props) => (
        <IconSecure {...props} secureTextEntry={secureTextEntry} />
    );
    const { email, password } = formData;
    return (
        <Layout style={indexStyles.LayoutContainer}>
            <Layout style={indexStyles.LayoutContent}>
                <Input
                    label="EMAIL"
                    style={indexStyles.Input}
                    value={email}
                    onChangeText={(value) =>
                        handleInputChange('email', value)
                    }
                    placeholder="Email"
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
                <CheckBox
                    text="Nhớ mật khẩu"
                    checked={checked}
                    onChange={onCheckedChange}
                    style={indexStyles.CheckBox}
                />
                <Button style={indexStyles.Button} onPress={()=>
                    {
                    if(isFromCartScreen){
                        navigation.navigate('CartScreen'),changeIsAuth(true)
                    }else{
                        navigation.navigate('HomeScreen'),changeIsAuth(true)}
                    }
                    }>
                    ĐĂNG NHẬP
                </Button>
                <Layout style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#1654B4', marginBottom: 15, marginTop: 10 }}
                    onPress={()=>navigation.navigate('ForgetPasswordScreen')}>Quên mật khẩu?</Text>
                    <Text>Hoặc đăng nhập với</Text>
                </Layout>
                <Layout style={{ flexDirection: 'row',marginTop:10 }}>
                    <TouchableOpacity style={indexStyles.FacebookStyle} activeOpacity={0.5}>
                        <Image
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
                            }}
                            //You can also show the image from you project directory like below
                            //source={require('./Images/facebook.png')}
                            //Image Style
                            style={indexStyles.ImageIconStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={indexStyles.GooglePlusStyle} activeOpacity={0.5}>
                        <Image
                            source={{
                                uri:
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png',
                            }}
                            //You can also show the image from you project directory like below
                            //source={require('./Images/google-plus.png')}
                            //Image Style
                            style={indexStyles.ImageIconStyle}
                        />
                    </TouchableOpacity>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default SignInScreen;
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
        marginHorizontal: 20,
        marginTop: 20
    },
    CheckBox: { marginBottom: 16 },
    Button: {
        backgroundColor: '#1654B4',
        borderRadius: 5
    },
    GooglePlusStyle: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E4E9F2',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    FacebookStyle: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#3B5998',
        borderWidth: 1,
        borderColor: '#3B5998',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'cover',
    }
});