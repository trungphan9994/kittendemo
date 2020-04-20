import React, { useState, useCallback } from 'react';
import { BackIcon, IconSecure } from '../Share/IconComponent';
import { Modal, View,StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction, Input, Button, Divider } from '@ui-kitten/components';
const ChangePasswordModel = ({ isOpen,handleCancleModalChangePassword,
    handleDoneModalChangePassword, ...props }) => {
    const [formData, setFormData] = useState({ oldPassword: '', newPassword: '', verifyPassword: '' });
    const [secureOldPasswordTextEntry, setSecureOldPasswordTextEntry] = useState(true);
    const [secureNewPasswordTextEntry, setSecureNewPasswordTextEntry] = useState(true);
    const [secureVerifyPasswordTextEntry, setSecureVerifyPasswordTextEntry] = useState(true);
    const onIconOldPress = useCallback(() => {
        setSecureOldPasswordTextEntry((secureOldPasswordTextEntry) => !secureOldPasswordTextEntry);
    }, []);
    const RenderIconOld = (props) => (
        <IconSecure {...props} secureTextEntry={secureOldPasswordTextEntry} />
    );
    const onIconNewPress = useCallback(() => {
        setSecureNewPasswordTextEntry((secureNewPasswordTextEntry) => !secureNewPasswordTextEntry);
    }, []);
    const RenderIconNew = (props) => (
        <IconSecure {...props} secureTextEntry={secureNewPasswordTextEntry} />
    );
    const onIconVerifyPress = useCallback(() => {
        setSecureVerifyPasswordTextEntry((secureVerifyPasswordTextEntry) => !secureVerifyPasswordTextEntry);
    }, []);
    const RenderIconVerify = (props) => (
        <IconSecure {...props} secureTextEntry={secureVerifyPasswordTextEntry} />
    );
    const handleInputChange = useCallback((name, value) => {
        return setFormData((formDataState) => ({
            ...formDataState,
            [name]: value
        }));
    }, []);
    const { oldPassword, newPassword, verifyPassword } = formData;  
    const checkPassword =useCallback((oldPassword,newPassword,verifyPassword) =>{
        console.log(oldPassword,newPassword,verifyPassword)
        if (oldPassword !== newPassword){
            if(newPassword === verifyPassword){
                handleDoneModalChangePassword(verifyPassword)
            } else {
                alert('Mật khẩu mới không trùng khớp')
            }
        }else{
            alert('Mật khẩu mới trùng với mật khẩu cũ')
        }
    },[oldPassword,newPassword,verifyPassword])
    return (
        <Modal animationType="slide" transparent={false} visible={isOpen}>
            <View style={styles.View}>
                <TopNavigation
                    title="Đổi mật khẩu"
                    titleStyle={styles.TopNavigation}
                    alignment="center"
                    leftControl={
                        <TopNavigationAction
                            icon={BackIcon}
                            onPress={handleCancleModalChangePassword}
                        />
                    }

                />
                <Divider />
                <View style={styles.Body}>
                    <Input
                        label="MẬT KHẨU CŨ"
                        value={oldPassword}
                        placeholder="********"
                        style={styles.Input}
                        icon={RenderIconOld}
                        secureTextEntry={secureOldPasswordTextEntry}
                        onIconPress={onIconOldPress}
                        onChangeText={(value) =>
                            handleInputChange('oldPassword', value)
                        }
                    />
                    <Input
                        label="MẬT KHẨU MỚI"
                        value={newPassword}
                        placeholder="********"
                        style={styles.Input}
                        icon={RenderIconNew}
                        secureTextEntry={secureNewPasswordTextEntry}
                        onIconPress={onIconNewPress}
                        onChangeText={(value) =>
                            handleInputChange('newPassword', value)
                        }
                    />
                    <Input
                        label="NHẬP LẠI MẬT KHẨU MỚI"
                        value={verifyPassword}
                        placeholder="********"
                        style={styles.Input}
                        icon={RenderIconVerify}
                        secureTextEntry={secureVerifyPasswordTextEntry}
                        onIconPress={onIconVerifyPress}
                        onChangeText={(value) =>
                            handleInputChange('verifyPassword', value)
                        }
                    />
                </View>
                <Button style={styles.button} onPress={()=>checkPassword(oldPassword,newPassword,verifyPassword)}>Lưu</Button>
            </View>
        </Modal>
    );
};

export default ChangePasswordModel;
const styles = StyleSheet.create({
    View: {
        flex: 1,
    },
    TopNavigation: { fontWeight: 'bold', fontSize: 20 },
    ViewChild: {
        flex: 1
    },
    Input: {
        marginBottom: 16
    },
    Body:{
        flex: 1,
        marginLeft:24,
        marginRight:24,
        marginTop:20
    },
    button: {
        backgroundColor: '#1654B4',
        borderRadius: 8,
        borderColor: '#1654B4',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 14,
        marginBottom: 14
    }
})
