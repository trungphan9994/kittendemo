import React, { useState, useMemo, useCallback } from 'react';
import { SafeAreaView, Image, View, StatusBar, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import {
    Icon,
    Layout,
    TopNavigation,
    TopNavigationAction, Text, Button, Divider
} from '@ui-kitten/components';
import { ActionSheet, Root } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import { BackIcon } from '../Share/IconComponent';
import ProfileModal from '../Modals/ProfileModal';
import InputProfile from './InputProfile';
import ChangePasswordModal from '../Modals/ChangePasswordModal';
const { height, width } = Dimensions.get('window');
const circleNumberSize = (height / 10) * 4 - 40;
const ProfileScreen = ({ navigation }) => {
    const [currentField, setCurrentField] = useState('');
    const [tmpValues, setTmpValues] = useState('');
    const [modalvisible, setModalvisible] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Nguyễn Văn Anh',
        phone: '0927381022',
        email: 'nguyenvananh@gmail.com',
        birthday: new Date(),
        gender: 1,
        image: {
            id: Date.now(),
            url: '',
            content: ''
        }
    });
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    const onClickAddImage = useCallback(() => {
        const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancel'];
        ActionSheet.show(
            {
                options: BUTTONS,
                cancleButtonIndex: 2,
                title: 'Select a Photo'
            },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 0:
                        pickedImage('openCamera');
                        break;
                    case 1:
                        pickedImage('openPicker');
                        break;
                    default:
                        break;
                }
            }
        );
    }, [pickedImage]);
    const pickedImage = useCallback(
        async (functionName) => {
            if (typeof ImagePicker[functionName] === 'function') {
                let { path, data } = await ImagePicker[functionName]({
                    compressImageMaxWidth: 500,
                    compressImageMaxHeight: 500,
                    compressImageQuality: 0.7,
                    cropping: true,
                    includeBase64: true
                });
                if (path && data) {
                    handleChangeData('image', {
                        id: Date.now(),
                        url: { uri: path },
                        content: data
                    });
                }
            }
        },
        [handleChangeData]
    );
    const inputs = [
        { name: 'name', lable: 'Họ tên' },
        { name: 'phone', lable: 'Số điện thoại' },
        { name: 'email', lable: 'Email' },
        { name: 'birthday', lable: 'Ngày sinh' },
        { name: 'gender', lable: 'Giới tính' },
    ];
    const getCurrentField = useCallback(() => {
        let currentSelect = inputs.find((input) => input.name === currentField);
        return currentSelect ? currentSelect : { name: '', lable: '' };
    }, [currentField, inputs]);
    const handleCancleModal = useCallback(() => {
        setCurrentField('');
        setTmpValues('');
    }, []);
    const handleChangeData = useCallback((name, value) => {
        setProfileData((frofileDataCurren) => ({
            ...frofileDataCurren,
            [name]: value
        }));
    }, []);
    const handleDoneModal = useCallback(() => {
        if (currentField) {
            handleChangeData(currentField, tmpValues);
        }
        setCurrentField('');
    }, [tmpValues, currentField, setCurrentField]);

    const handleCancleModalChangePassword = useCallback(() => {
        setModalvisible(false);
    }, [])
    const handleDoneModalChangePassword = useCallback((password) => {
        setModalvisible(false);
        console.log(password);
    }, [])

    let findCurrentFiled = getCurrentField();
    let {
        image: { url }
    } = profileData;
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <ProfileModal
                isOpen={currentField ? true : false}
                label={findCurrentFiled.lable}
                name={findCurrentFiled.name}
                value={tmpValues}
                setValues={setTmpValues}
                handleCancleModal={handleCancleModal}
                handleDoneModal={handleDoneModal}
            />
            <ChangePasswordModal isOpen={modalvisible}
                handleCancleModalChangePassword={handleCancleModalChangePassword}
                handleDoneModalChangePassword={handleDoneModalChangePassword}
            />
            <TopNavigation
                style={styles.TopNavigation}
                title="Profile"
                titleStyle={styles.titleStyleTopNavigation}
                alignment="center"
                leftControl={BackAction()}
            />
            <Divider />
            <Root style={{ flex: 1 }}>
                <ScrollView>
                    <Layout style={styles.Layout}>
                        <View style={styles.View}>
                            <Image
                                style={styles.circleNumber}
                                source={
                                    !url
                                        ? {
                                            uri:
                                                'https://i.pinimg.com/originals/47/fa/ee/47faee72871798390d518d0681ac6aab.jpg'
                                        }
                                        : url
                                }
                            />
                            <View style={styles.icon}>
                                <Icon
                                    name="camera"
                                    fill="#1654B4"
                                    width={28}
                                    height={28}
                                    onPress={onClickAddImage}
                                />
                            </View>
                        </View>
                    </Layout>
                    <Layout>
                        {inputs.map(({ name, lable }, key) => {
                            let value = profileData[name];
                            const MemoView = useMemo(
                                () => (
                                    <InputProfile
                                        key={key}
                                        name={name}
                                        lable={lable}
                                        value={value}
                                        setCurrentField={setCurrentField}
                                        setTmpValues={setTmpValues}
                                        handleChangeData={handleChangeData}
                                    />
                                ),
                                [name, lable, value] 
                            );
                            return MemoView;
                        })}
                    </Layout>
                    <View style={styles.View} />
                    <Layout style={{
                        width: width,
                        height: 10,
                        backgroundColor: '#f7f8fb'
                    }} />
                    <Divider />
                    <TouchableOpacity onPress={() => navigation.navigate('AddressScreen')}>
                        <Layout style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.headerText}
                                category="s1">Sổ địa chỉ</Text>
                            <Icon name='arrow-ios-forward' style={{ width: 32 }} width={32} height={32} fill='#C5CEE0' />
                        </Layout>
                    </TouchableOpacity>
                    <Layout style={{
                        width: width,
                        height: 10,
                        backgroundColor: '#f7f8fb'
                    }} />
                    <Divider />
                    <TouchableOpacity onPress={() => setModalvisible(true)}>
                        <Layout style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.headerText}
                                category="s1">Đổi mật khẩu</Text>
                            <Icon name='arrow-ios-forward' style={{ width: 32 }} width={32} height={32} fill='#C5CEE0' />
                        </Layout>
                    </TouchableOpacity>
                </ScrollView>
            </Root>
        </SafeAreaView>
    );
};
export default ProfileScreen;
const styles = StyleSheet.create({
    
    SafeAreaView: { flex: 1, backgroundColor: 'white' },
    // TopNavigation: { marginTop: 20 },
    titleStyleTopNavigation: { fontWeight: 'bold', fontSize: 20 },
    headerText: {
        marginHorizontal: 24,
        marginVertical: 4,
        marginTop: 12,
        marginBottom: 12,
        fontSize:14
    },
    text: {
        // marginHorizontal: 24,
        marginVertical: 4,
        marginTop: 12,
        marginBottom: 12
    },
    Layout: {
        width: width,
        height: height / 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f8fb'
    },
    View: { paddingTop: 10, paddingBottom: 10 },
    Layout1: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    LayoutBreak: {
        height: 30,
        backgroundColor: '#f7f8fb'
    },
    headerImage: {
        resizeMode: 'cover',
        height: height / 2 / 2
    },
    circleNumber: {
        resizeMode: 'cover',
        width: circleNumberSize - 90,
        height: circleNumberSize - 90,
        borderRadius: (circleNumberSize - 90) / 2,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 10,
        shadowRadius: 20
    },
    icon: {
        position: 'absolute',
        top: 110,
        left: 100,
        width: circleNumberSize / 4,
        height: circleNumberSize / 4,
        borderRadius: circleNumberSize / 4 / 2,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 10,
        shadowRadius: 20,

        elevation: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f8fb'
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
