
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Input, Text, TopNavigation, TopNavigationAction, Avatar } from '@ui-kitten/components';
import { BackIcon } from '../Share/IconComponent';
const ForgetPasswordScreen = ({ navigation }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [sendRequest, setSendRequest] = useState(false);
    const handleInputChange = useCallback((name, value) => {
        return setFormData((formDataState) => ({
            ...formDataState,
            [name]: value
        }));
    }, []);

    const { email, password } = formData;
    return (
        <Layout style={indexStyles.LayoutContainer}>
            <TopNavigation
                title="Quên mật khẩu"
                alignment="center"
                titleStyle={indexStyles.titleStyle}
                leftControl={
                    <TopNavigationAction
                        icon={BackIcon}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                }
            />
            {sendRequest === false ? (
                <Layout style={indexStyles.LayoutContent}>
                    <Text style={indexStyles.Input}>Vui lòng cung cấp Email để lấy lại mật khẩu</Text>
                    <Input
                        label="EMAIL"
                        style={indexStyles.Input}
                        value={email}
                        onChangeText={(value) =>
                            handleInputChange('email', value)
                        }
                        placeholder="Email"
                    />
                    <Button style={indexStyles.Button} onPress={() => setSendRequest(true)}>
                        Lấy lại mật khẩu
                </Button>

                </Layout>
            )
                : (
                    <Layout style={[indexStyles.LayoutContent]}>
                        <Layout style={[indexStyles.LayoutCenter]}>
                            <Avatar style={[indexStyles.drawerImage,indexStyles.marginBot]} size='large' source={{
                                uri: 'https://lisansaday.ticaret.edu.tr/wp-content/uploads/t%C4%B1k.png'
                            }}
                            />
                            <Text style={[indexStyles.Input, indexStyles.colorText]}>Email đã được gửi</Text>
                        </Layout>
                        <Text style={indexStyles.Input}>Email hướng dẫn tạo mật khẩu đã được gửi về email của bạn. Hãy kiểm tra email và làm theo hướng dẫn.</Text>
                        <Text style={indexStyles.Input}>Nếu không thấy email trong hộp thư đến (Inbox), vui lòng kiểm tra hộp thư Spam hoặc Junk Folder.</Text>
                        <Button style={indexStyles.Button} onPress={() => navigation.navigate('HomeScreen')}>
                            Tiếp tục mua sắm
                </Button>

                    </Layout>
                )
            }

        </Layout>
    )
}
export default ForgetPasswordScreen;
const indexStyles = StyleSheet.create({
    Input: {
        marginBottom: 16
    },
    LayoutContainer: {
        flex: 1
    },
    LayoutCenter: {
        alignItems: 'center',
    },
    LayoutContent: {
        marginHorizontal: 20,
        marginTop: 10
    },
    Button: {
        backgroundColor: '#1654B4',
        borderRadius: 5
    },
    titleStyle: { fontWeight: 'bold', fontSize: 20 },
    colorText: {
        color: '#00997A'
    },
    drawerImage: {
        height: 100, 
        width: 100,
        resizeMode: 'center'
    },
    marginBot:{
        marginBottom:10
    }
});