import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, Input, TopNavigationAction, Button, Select } from '@ui-kitten/components';
import { ActionSheet, Root } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modalbox';
const { width, height } = Dimensions.get('window');
const BackIcon = (style) => (
    <Icon {...style} name='arrow-back' />
);
const circleNumberSize = (height / 10) * 4 - 40;
export const ProfileScreen = ({ navigation }) => {
    const gender = [
        { text: 'Nam' },
        { text: 'Nữ' },
    ];
    let item = {
        id: Date.now(),
        url: "",
        content: ""
    }
    const [imageProfile, setImageProfile] = React.useState(item);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [lable, setLable] = React.useState("");
    const [firstName, setFirstName] = React.useState("Jennifer");
    const [lastName, setLastName] = React.useState("Lorpert");
    const [tmpValues, setTmpValues] = React.useState("");
    const [age, setAge] = React.useState("25");
    const [weight, setWeight] = React.useState("47");
    const [heightProfile, setHeightProfile] = React.useState("165");
    const [selectedGender, setSelectedGender] = React.useState(gender[0]);
    const refModal = useRef();
    const navigateBack = () => {
        navigation.goBack();
    };
    const validateName = (name) => {
        var re = /[a-zA-Z_ ]{3,30}$/;
        return re.test(name);
    }
    const validateNumberPhone = (numberPhone) => {
        var re = /\b\d{9,11}\b/;
        return re.test(numberPhone);
    };
    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    const BUTTONS = ["Take Photo", "Choose Photo Library", "Cancel"];
    const onClickAddImage = () => {
        ActionSheet.show(
            {
                options: BUTTONS,
                cancleButtonIndex: 2,
                title: "Select a Photo"
            },
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        takePhotoFromCamera();
                        break;
                    case 1:
                        choosePhotoFromLibrary();
                        break;
                    default:
                        break;
                }
            }
        )
    }
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 500,
            compressImageMaxHeight: 500,
            compressImageQuality: 0.7,
            cropping: true,
            includeBase64: true,
        }).then(image => {
            onSelectedImage(image);
            console.log(image);
        });
    }
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            compressImageMaxWidth: 500,
            compressImageMaxHeight: 500,
            compressImageQuality: 0.7,
            cropping: true,
            includeBase64: true,
        }).then(image => {
            onSelectedImage(image);
            console.log(image);
        });
    }
    const onSelectedImage = (image) => {
        const source = { uri: image.path }
        let item = {
            id: Date.now(),
            url: source,
            content: image.data
        }
        setImageProfile(item)
    }
    const handleCancleModal = () => {
        // setModalVisible(false);
        refModal.current.close();
        if (lable == 'First Name') {
            setFirstName(firstName)
        }
        if (lable == 'Last Name') {
            setLastName(lastName)
        }
        if (lable == 'Age') {
            setAge(age)
        }
        if (lable == 'Weight') {
            setWeight(weight)
        }
        if (lable == 'Height') {
            setHeightProfile(heightProfile)
        }
    }
    const handleDoneModal = () => {
        // setModalVisible(false);
        refModal.current.close();
        if (lable == 'First Name') {
            setFirstName(toTitleCase(tmpValues))
        }
        if (lable == 'Last Name') {
            setLastName(toTitleCase(tmpValues))
        }
        if (lable == 'Age') {
            setAge(toTitleCase(tmpValues))
        }
        if (lable == 'Weight') {
            setWeight(toTitleCase(tmpValues))
        }
        if (lable == 'Height') {
            setHeightProfile(toTitleCase(tmpValues))
        }
    }

    const toTitleCase = (phrase) => {
        return phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    const renderModalItem = () => {
        const DeleteIcon = (style) => (<Icon {...style} name='close' />);
        return (
            <Modal ref={refModal} animationType="slide" transparent={false}
                style={{
                    borderRadius: Platform.OS === 'ios' ? 20 : 6,
                    shadowRadius: 10,
                    width: width - 40,
                    height: height/3
                }}
                position='center'
                backdrop={true}

            >
                <View>
                    <TopNavigation
                        title={lable}
                        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
                        alignment='center'
                        leftControl={<TopNavigationAction icon={DeleteIcon} onPress={handleCancleModal} />}
                    />
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Input
                            label={lable}
                            value={tmpValues}
                            keyboardType={(lable == 'Age' || lable == 'Weight' || lable == 'Height') ? 'numeric' : 'text'}
                            style={{ margin: 10 }}
                            onChangeText={setTmpValues}
                            placeholder={lable}
                        />
                        <Button style={{ margin: 10 }} onPress={handleDoneModal}>Xác nhận</Button>
                    </View>
                </View>
            </Modal>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <TopNavigation style={{ marginTop: 20 }} title='Profile' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Root>
                {renderModalItem()}
                <Layout style={{ width: width, height: height / 4, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f7f8fb' }}>
                    <View style={{ paddingTop: 10, paddingBottom: 10 }} >
                        <Image style={styles.circleNumber}
                            source={imageProfile.url == '' ? { uri: 'https://i.pinimg.com/originals/47/fa/ee/47faee72871798390d518d0681ac6aab.jpg' } : imageProfile.url}
                        ></Image>
                        <View style={styles.icon}>
                            <Icon name='camera' fill='black' width={28} height={28} onPress={onClickAddImage} />
                        </View>

                    </View>
                </Layout>
                <Layout>
                    <TouchableOpacity onPress={() => { refModal.current.open(); setTmpValues(firstName); setLable("First Name") }} activeOpacity={0.5}>
                        <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text
                                style={styles.headerText}
                                appearance='hint'
                                category='s1'>
                                First Name
                    </Text>
                            <Text
                                style={styles.headerText}
                                category='s1'>
                                {firstName}
                            </Text>
                        </Layout>
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={() => { refModal.current.open(); setTmpValues(lastName); setLable("Last Name") }} activeOpacity={0.5}>
                        <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text
                                style={styles.headerText}
                                appearance='hint'
                                category='s1'>
                                Last Name
                    </Text>
                            <Text
                                style={styles.headerText}
                                category='s1'>
                                {lastName}
                            </Text>
                        </Layout>
                    </TouchableOpacity>
                    <Divider />
                    <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text
                            style={styles.headerText}
                            appearance='hint'
                            category='s1'>
                            Gender
                    </Text>
                        <Select
                            style={{ width: width / 3.2 }}
                            data={gender}
                            selectedOption={selectedGender}
                            onSelect={setSelectedGender}
                        />
                    </Layout>
                    <Divider />
                    <TouchableOpacity onPress={() => { refModal.current.open(); setTmpValues(age); setLable("Age") }} activeOpacity={0.5}>
                        <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text
                                style={styles.headerText}
                                appearance='hint'
                                category='s1'>
                                Age
                    </Text>
                            <Text
                                style={styles.headerText}
                                category='s1'>
                                {age}
                            </Text>
                        </Layout>
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={() => { refModal.current.open(); setTmpValues(weight); setLable("Weight") }} activeOpacity={0.5}>
                        <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text
                                style={styles.headerText}
                                appearance='hint'
                                category='s1'>
                                Weight
                    </Text>
                            <Text
                                style={styles.headerText}
                                category='s1'>
                                {weight} kg
                    </Text>
                        </Layout>
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={() => { refModal.current.open(); setTmpValues(heightProfile); setLable("Height") }} activeOpacity={0.5}>
                        <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text
                                style={styles.headerText}
                                appearance='hint'
                                category='s1'>
                                Height
                    </Text>
                            <Text
                                style={styles.headerText}
                                category='s1'>
                                {heightProfile} cm
                    </Text>
                        </Layout>
                    </TouchableOpacity>
                </Layout>
                <Layout style={{ height: 30, backgroundColor: '#f7f8fb' }}></Layout>
                <Layout>
                    <Divider />
                    <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text
                            style={styles.headerText}
                            appearance='hint'
                            category='s1'>
                            Email
                    </Text>
                        <Text
                            style={styles.headerText}
                            category='s1'>
                            JenChristino@gmail.com
                    </Text>
                    </Layout>
                    <Divider />
                    <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text
                            style={styles.headerText}
                            appearance='hint'
                            category='s1'>
                            Phone Number
                    </Text>
                        <Text
                            style={styles.headerText}
                            category='s1'>
                            +84 927381022
                    </Text>
                    </Layout>
                    <Divider />
                </Layout>
            </Root>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    headerText: {
        marginHorizontal: 24,
        marginVertical: 4,
        marginTop: 12,
        marginBottom: 12
    },
    headerImage: {
        resizeMode: 'cover',
        height: (height / 2) / 2,
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
        backgroundColor: "#fff",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 10,
        shadowRadius: 20,
    },
    icon: {
        position: 'absolute',
        top: 110,
        left: 100,
        width: circleNumberSize / 4,
        height: circleNumberSize / 4,
        borderRadius: (circleNumberSize / 4) / 2,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 10,
        shadowRadius: 20,

        elevation: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f8fb'
    }
});